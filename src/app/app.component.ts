import { Component, OnInit } from '@angular/core';
import { LogService } from './shared/utils/log/services/log.service';
import { LogDecorator } from './shared/decorators/log/log.decorator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  constructor() {}

  @LogDecorator()
  ngOnInit(): void {
    LogService.error(this.constructor.name, 'File')
    // this._logService.warn('test')
  }
}
