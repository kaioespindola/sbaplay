import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from '../../app/app.constants';
import { Noticias } from '../../models/noticias/noticias.interface';

@Injectable()
export class NoticiasProvider {

  constructor(public http: HttpClient) {
  }

  async getNoticias(page: string, limit: string) {
    return await this.http.get<Array<Noticias>>(`${Constants.API_PROD}noticias?page=${page}&sort=Noticias.date&limit=${limit}&direction=DESC`).toPromise();
  }

}
