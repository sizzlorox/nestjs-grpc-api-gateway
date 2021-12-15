import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import * as path from 'path';
import { HelloController } from './hello.controller';

@Module({
  imports: [
    // HELLO SERVICE
    ClientsModule.register([
      {
        name: 'HELLO_PACKAGE',
        transport: Transport.GRPC,
        options: {
          package: 'hello',
          protoPath: path.join(__dirname, '..', '..', '..', 'hello.proto'),
        },
      },
    ]),
  ],
  controllers: [HelloController],
})
export class HelloModule {}
