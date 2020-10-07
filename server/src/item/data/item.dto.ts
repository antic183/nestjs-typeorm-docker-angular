import { Column } from 'typeorm';
import { IsDecimal, IsNotEmpty, IsNumber } from "class-validator";

export class ItemDto {
  id?: number;

  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  @Column("decimal", { precision: 13, scale: 2 })
  price: number;
}