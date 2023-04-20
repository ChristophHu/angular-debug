import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConfigModule } from './shared/utils/config/config.module';
import { ConfigService } from './shared/utils/config/config.service';
import { LogModule } from './shared/utils/log/log.module';
import { DebugModeModule } from './shared/components/debug-mode/debug-mode.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LogModule,
    ConfigModule,
    DebugModeModule
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
