import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { environment } from 'src/environments/environment'
import { LogDecorator } from '../../decorators/log/log.decorator'

@Injectable()
export class ConfigService {
  private _config: any
  private _configFile: string = 'development'

  constructor(private _httpClient: HttpClient) {
    if (environment.production) this._configFile = 'production'
    console.log(`config: ${this._configFile}`)
  }

  load() {
    return new Promise((resolve, reject) => {
      this._httpClient.get('./assets/config/' + this._configFile + '.json')
        .subscribe({
          next: (data: any) => {
            this._config = data
            resolve(true)
          },
          error: (error: any) => {
            console.error(error)
            resolve(false)
          }
        })
    })
  }

  isDevmode() {
    return this._configFile === 'development'
  }

  @LogDecorator()
  getApi(key: string): string {
    return this._config["api_endpoints"][key]
  }

  @LogDecorator()
  get(key: any) {
    return this._config[key]
  }
}