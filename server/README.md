
# dto validation:
  npm install class-validator class-transformer --save
  
  @decorator on dto
  https://github.com/typestack/class-validator

  @UsePipes(ValidationPipe) on controller


# typeorm and db

1. > npm install --save @nestjs/typeorm typeorm mysql
   > npm install --save pq 


2. typeorm config add to app module
  import { Module } from '@nestjs/common';
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

# run docker db
  > cd postgresql
  > docker-compose run

# run your api
  cd rest-api-server
  npm run start:dev