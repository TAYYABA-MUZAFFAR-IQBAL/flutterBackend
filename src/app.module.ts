import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { QRModule } from './QR/qr.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(
      'mongodb+srv://tayyaba:tayyaba@cluster0.kql16.mongodb.net/flutter',
      { useNewUrlParser: true },
    ),
    QRModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
