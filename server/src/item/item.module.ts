import { ItemController } from './item.controller';
import { ItemService } from './item.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemEntity } from './data/item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ItemEntity])],
  providers: [ItemService],
  controllers: [ItemController],
})
export class ItemModule {}
