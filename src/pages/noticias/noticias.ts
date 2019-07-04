import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import "rxjs/add/operator/map";
import { trigger,style,transition,animate,query,stagger} from '@angular/animations';

@IonicPage()
@Component({
  selector: 'page-noticias',
  templateUrl: 'noticias.html',
  animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(-15px)' }),
          stagger('50ms',
          animate('550ms ease-out',
          style({ opacity: 1, transform: 'translateY(0px)'})))
        ], { optional: true }),
        query(':leave', animate('50ms', style({ opacity: 0 })), {
          optional: true
        })
      ])
    ])
  ]
})
export class NoticiasPage {

  fakeNoticias: Array<any> = new Array(5);

  noticias = [];
  page = 1;
  maximumPages = 10;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private httpClient: HttpClient) {
  }

  verNoticia(item) {
    this.navCtrl.push("NoticiaPage" , {
      item:item
    });
  }

  loadNoticias(infiniteScroll?) {
    this.httpClient.get(`https://api.sba1.com/noticias?page=${this.page}&sort=Noticias.date&direction=DESC`)
    .subscribe(data => {
      this.noticias = this.noticias.concat(data).map(res => res);
      if (infiniteScroll) {
        infiniteScroll.complete();
      }
      console.log(this.noticias);
    })
  }

  loadMore(infiniteScroll) {
    this.page++;
    this.loadNoticias(infiniteScroll);
 
    if (this.page === this.maximumPages) {
      infiniteScroll.enable(false);
    }
  }

  ionViewDidLoad() {
    // Simulating network latency
    // with a timeout
    setTimeout(() => {
      this.loadNoticias();
    }, 1500);
  }

}
