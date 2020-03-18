import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from "@nestjs/config";
import { Cat } from './cats/cat.entity'
import { CatsModule } from './cats/cats.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: "mysql",
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [Cat],
      synchronize: true
    }),
    CatsModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
