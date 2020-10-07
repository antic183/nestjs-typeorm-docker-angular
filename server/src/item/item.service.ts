import { ItemEntity } from './data/item.entity';
import { ItemDto } from './data/item.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(ItemEntity)
    private itemRepository: Repository<ItemEntity>,
  ) {}

  async getItems(): Promise<ItemEntity[]> {
    return await this.itemRepository.find();
  }

  async getOne(id: number): Promise<ItemEntity> {
    const entry = await this.itemRepository.findOne(id);
    if (!entry) {
      throw new NotFoundException(`Item with id = ${id} doesn't exists!`);
    }

    return entry;
  }

  async addItem(item: ItemDto): Promise<ItemEntity> {
    const entity = new ItemEntity();
    entity.title = item.title;
    entity.description = item.description;
    entity.price = item.price;

    return await this.itemRepository.save(entity);
  }

  async deleteItem(id: number): Promise<void> {
    const res = await this.itemRepository.delete(id);
    console.log(res);
    if (!res.affected) {
      throw new NotFoundException(`Item with id = ${id} doesn't exists!`);
    }
  }

  async updateItem(id: number, item: ItemDto) {
    const oldItem = await this.getOne(id);
    if (!oldItem) {
      throw new NotFoundException(`Item with id = ${id} doesn't exists!`);
    }

    oldItem.title = item.title;
    oldItem.description = item.description;
    oldItem.price = item.price;

    return await this.itemRepository.save(oldItem);
  }
}
