import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LeadController } from './controllers/lead/lead.controller';
import { PlansController } from './controllers/plans/plans.controller';

@Module({
  imports: [],
  controllers: [AppController, LeadController, PlansController],
  providers: [AppService],
})
export class AppModule {}
