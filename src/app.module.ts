import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloModule } from './domains/v1/hello/hello.module';

@Module({
  imports: [HelloModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
