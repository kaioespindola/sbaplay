import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Constants } from '../../app/app.constants';
import { Canais } from '../../models/canais/canais.interface';

@Injectable()
export class ChannelsProvider {

  constructor(public http: HttpClient) {
  }

  async listChannels() {
    return await this.http.get<Array<Canais>>(`${Constants.API_PROD}canais`).toPromise();
  }

}