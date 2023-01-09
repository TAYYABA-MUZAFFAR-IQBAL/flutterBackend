import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  UseGuards,
  Put,
  Post,
} from '@nestjs/common';
import { QrSchema } from './qr.model';
import { QRService } from './qr.service';


@Controller('qr')
export class QRController {
  constructor(private readonly qrService: QRService) { }

  @Post('save')
  register(@Body() value: QrSchema): Promise<QrSchema | null> {
    try {
      return this.qrService.create(value);
    } catch (error) {
      console.log(error);

    }
  }
}
