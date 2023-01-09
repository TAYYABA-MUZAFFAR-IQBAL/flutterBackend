import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type QrDocument = QrSchema & Document;

@Schema()
export class QrSchema {


    @Prop({ required: true})
    scannedData: string;
}

export const qrModel = SchemaFactory.createForClass(QrSchema);
