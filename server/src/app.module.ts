import { Module } from '@nestjs/common';
import { ItemModule } from './item/item.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      // # mysql
      // type: 'mysql',
      // port: 3306,
      
      // # postgresql
      type: 'postgres',
      port: 5432,

      host: 'localhost',
      username: 'nestjs',
      password: 'typeorm',
      database: 'nestjs_typeorm',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ItemModule,
  ],
})
export class AppModule {}
