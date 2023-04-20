import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebugModeComponent } from './debug-mode.component';

@NgModule({
  declarations: [
    DebugModeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DebugModeComponent
  ]
})
export class DebugModeModule { }
