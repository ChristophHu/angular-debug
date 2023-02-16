import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { LogService } from './services/log.service'
import { LogPublisherService } from './services/log-publisher.service'
import { HttpClientModule } from '@angular/common/http'
import { ConfigModule } from '../config/config.module'
import { ConfigService } from '../config/config.service'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ConfigModule,
    HttpClientModule
  ],
  providers: [
    LogService,
    LogPublisherService,
    ConfigService
  ]
})
export class LogModule { }
