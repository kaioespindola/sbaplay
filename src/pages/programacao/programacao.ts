import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import "rxjs/add/operator/map";

@IonicPage()
@Component({
  selector: 'page-programacao',
  templateUrl: 'programacao.html',
})
export class ProgramacaoPage {

  fakeGrades: Array<any> = new Array(4);

  canaldoboi: string = "canaldoboi";

  grades = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private httpClient: HttpClient) {
  }

  getGrade() {
    this.httpClient.get(`https://cors-anywhere.herokuapp.com/http://api.sba1.com/programacao/grade`)
    .subscribe(datagrade => {
      this.grades = this.grades.concat(datagrade).map(res => res);
    })
  }

  ionViewDidLoad() {

    setTimeout(() => {
      this.getGrade();
    }, 1500);
  }

}
