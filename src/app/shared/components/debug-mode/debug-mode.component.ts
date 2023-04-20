import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'debug-mode',
  templateUrl: './debug-mode.component.html',
  styleUrls: ['./debug-mode.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class DebugModeComponent {
  debug: boolean = false

  toggle() {
    this.debug = !this.debug
    console.log(this.debug)
    switch (this.debug) {
      case true:
        document.body.classList.add('debug')
        break
      case false:
        document.body.classList.remove('debug')
        break
    }
  }
}
