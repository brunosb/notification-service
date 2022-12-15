import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['divine-bedbug-6206-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'ZGl2aW5lLWJlZGJ1Zy02MjA2JPUpVW1zd_RlQE1VW2l3Ga5p-B0K_N7V2tVSQNk',
          password:
            '1199nEXKC1mfYUIDRNqHlPpPhOQmkqDV7kVQb0Ltq82xglTxEZ0izcd_T8MeKp77qTPe9g==',
        },
        ssl: true,
      },
    });
  }
  async onModuleDestroy() {
    await this.close();
  }

  // async OnModuleDestroy() {
  //   await this.close();
  // }
}
