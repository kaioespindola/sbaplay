import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Perfil } from '../../models/perfil';

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  perfilData: FirebaseObjectObservable<Perfil>

  email: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private afAuth: AngularFireAuth,
    private afDatabase: AngularFireDatabase) {
  }

	ionViewWillLoad() {

	  this.afAuth.authState.subscribe(data => {
	    if(data && data.email && data.uid) {
	      this.email = data.email;
	      this.perfilData = this.afDatabase.object(`perfil/${data.uid}`)
	    }
	  });

	}

	editarPerfil() {
	  this.navCtrl.push("EditarperfilPage");
	}

	logout() {
	  this.navCtrl.parent.parent.setRoot("BemvindoPage");
	  this.afAuth.auth.signOut();
	}

}
