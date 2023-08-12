import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeFormModule } from './commons/type-form-clients/type-form.module';

@Module({
  imports: [TypeFormModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
