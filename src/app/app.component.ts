import { Component, OnInit } from '@angular/core';
// import Loo from ''
import { LogService } from './shared/utils/log/services/log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  constructor(private _logService: LogService) {
    
  }

  ngOnInit(): void {
    LogService.error(this.constructor.name, 'File')
    // this._logService.warn('test')
  }
}
