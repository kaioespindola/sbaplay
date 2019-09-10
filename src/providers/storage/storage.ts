import { Injectable } from '@angular/core';
import { Constants } from '../../app/app.constants';

@Injectable()
export class StorageProvider {

  constructor() {
  }

  async checkFirstLogin() {
    const firstLogin = localStorage.getItem(Constants.FIRST_LOGIN);
    if(firstLogin) {
      await localStorage.setItem(Constants.FIRST_LOGIN, "não");
      return false;
    } else {
      await localStorage.setItem(Constants.FIRST_LOGIN, "sim");
      return true;
    }
  }


}
