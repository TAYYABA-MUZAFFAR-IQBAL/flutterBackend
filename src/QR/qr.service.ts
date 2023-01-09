import {
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { FilterQuery, Model, UpdateQuery } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { QrDocument, QrSchema } from './qr.model';
import { throwError } from 'rxjs';




@Injectable()
export class QRService {
  constructor(
    @InjectModel(QrSchema.name) private qrModel: Model<QrDocument>,
  ) { }

  async create(body: Readonly<QrSchema>): Promise<QrSchema | any> {
    try {

      const newUser = new this.qrModel(body);
    console.log(newUser)
      return newUser.save();
    } catch (error) {
      new HttpException('Error', error)

    }

  }
}
