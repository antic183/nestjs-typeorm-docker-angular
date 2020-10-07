import { ItemService } from './item.service';
import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
  ParseIntPipe,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ItemDto } from './data/item.dto';
import { ItemEntity } from './data/item.entity';

@Controller('item')
export class ItemController {
  constructor(private itemService: ItemService) {}

  // @Get()
  // getAll(@Req() req: Request, @Res() res: Response): Response {
  //   return res.send('hello request url = ' + req.url);
  // }

  // @Get('item/b')
  // getB(): string {
  //   return 'B';
  // }

  @Get()
  getAll(): Promise<ItemEntity[]> {
    return this.itemService.getItems();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number): Promise<ItemEntity> {
    return this.itemService.getOne(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  add(@Body() itemDto: ItemDto): Promise<ItemEntity> {
    return this.itemService.addItem(itemDto);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id,
    @Body() itemDto: ItemDto,
  ): Promise<ItemEntity> {
    return this.itemService.updateItem(id, itemDto);
  }

  @Delete(':id')
  delte(@Param('id', ParseIntPipe) id): Promise<void> {
    return this.itemService.deleteItem(id);
  }
}
