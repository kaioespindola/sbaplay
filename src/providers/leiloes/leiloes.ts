import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from '../../app/app.constants';
import { Leiloes } from '../../models/leiloes/leiloes.interface';

@Injectable()
export class LeiloesProvider {

  constructor(public http: HttpClient) {
  }

  async getLeiloes(page: string, limit: string) {
    return await this.http.get<Array<Leiloes>>(`${Constants.API_PROD}leiloes?page=${page}&sort=Leiloes.date&limit=${limit}&direction=ASC`).toPromise();
  }

}
