
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { QRController } from './qr.controller';
import { qrModel, QrSchema } from './qr.model';
import { QRService } from './qr.service';
@Module({
    providers: [QRService],
    controllers: [QRController],
    imports: [
        MongooseModule.forFeature([{ name: QrSchema.name, schema: qrModel }]),
    ],
})
export class QRModule { }
