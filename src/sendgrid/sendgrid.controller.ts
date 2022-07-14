import { Controller, Post, Query } from '@nestjs/common';
import { SendgridService } from './sendgrid.service';

@Controller('sendgrid')
export class SendgridController {
  constructor(private readonly sendgridService: SendgridService) {}

  @Post('send')
  async sendEmail(@Query('email') email) {
    const mail = {
      to: email,
      subject: 'Greeting Message from NestJS Sendgrid',
      text: 'and easy to do anywhere, even with Node.js',
      from: '',
    };

    return await this.sendgridService.send(mail);
  }
}
