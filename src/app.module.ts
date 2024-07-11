import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://mpushparaja13:LGHmZmSd0uOZm8UC@cluster0.wncdyte.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'), TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
