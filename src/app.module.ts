import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SendgridService } from './sendgrid/sendgrid.service';
import { SendgridController } from './sendgrid/sendgrid.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, SendgridController],
  providers: [AppService, SendgridService],
})
export class AppModule {}
