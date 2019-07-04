import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from '../../app/app.constants';

@Injectable()
export class ProgramacaoProvider {

  constructor(public http: HttpClient) {
  }

  async programacaoCompleta() {
    return await this.http.get(`${Constants.API_PROD}programacao`).toPromise();
  }

  async programacaoAgora(canal) {
    return await this.http.get(`${Constants.API_PROD}canais/agora/${canal}`).toPromise();
  }

  async programacaoDepois(canal) {
    return await this.http.get(`${Constants.API_PROD}canais/depois/${canal}`).toPromise();
  }

}
