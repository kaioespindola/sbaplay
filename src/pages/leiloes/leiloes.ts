import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import "rxjs/add/operator/map";

@IonicPage()
@Component({
  selector: 'page-leiloes',
  templateUrl: 'leiloes.html',
})
export class LeiloesPage {

  leiloes = [];
  fakeLeiloes: Array<any> = new Array(5);
  page = 1;
  maximumPages = 10;

  todos: string = "todos";

  constructor(public navCtrl: NavController, public navParams: NavParams, private httpClient: HttpClient) {
  }

  loadLeiloes(infiniteScroll?) {
    this.httpClient.get(`https://cors-anywhere.herokuapp.com/http://api.sba1.com/leiloes?page=${this.page}&sort=Leiloes.date&direction=ASC`)
    .subscribe(data => {
      this.leiloes = this.leiloes.concat(data).map(res => res);
      if (infiniteScroll) {
        infiniteScroll.complete();
      }
      console.log(this.leiloes);
    })
  }
 
  loadMore(infiniteScroll) {
    this.page++;
    this.loadLeiloes(infiniteScroll);
 
    if (this.page === this.maximumPages) {
      infiniteScroll.enable(false);
    }
  }

  verLeilao(item) {
    this.navCtrl.push("LeilaoPage" , {
      item:item
    });
  }

  ionViewDidLoad() {
    // Simulating network latency
    // with a timeout
    setTimeout(() => {
      this.loadLeiloes();
    }, 1500);
  }

}
