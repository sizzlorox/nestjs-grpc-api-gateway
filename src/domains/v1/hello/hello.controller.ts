import { Controller, Get, Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';

import { HelloResult, HelloService } from './hello.inteface';

@Controller({
  version: '1',
  path: 'hello',
})
export class HelloController implements OnModuleInit {
  private helloService: HelloService;

  constructor(@Inject('HELLO_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.helloService = this.client.getService<HelloService>('HelloService');
  }

  @Get()
  greet(): Observable<HelloResult> {
    return this.helloService.greet({ name: 'dude' });
  }
}
