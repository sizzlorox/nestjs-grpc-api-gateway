import {
  Controller,
  Get,
  Inject,
  OnModuleInit,
  Param,
  Query,
} from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';

import { HelloResult, HelloService } from './hello.inteface';

@Controller({
  version: '1',
  path: 'hello',
})
export class HelloController implements OnModuleInit {
  private helloService: HelloService;

  constructor(@Inject('HELLO_PACKAGE') private readonly grpc: ClientGrpc) {}

  async onModuleInit() {
    this.helloService = this.grpc.getService<HelloService>('HelloService');
  }

  @Get()
  greet(@Query('name') name: string): Observable<HelloResult> {
    return this.helloService.greet({ name });
  }

  @Get(':name')
  create(@Param('name') name: string): Observable<void> {
    return this.helloService.create({ name });
  }
}
