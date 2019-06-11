import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Perfil } from '../../models/perfil';
import 'rxjs/add/operator/take'; 

@IonicPage()
@Component({
  selector: 'page-editarperfil',
  templateUrl: 'editarperfil.html',
})
export class EditarperfilPage {

	perfil = {} as Perfil;

	perfilData: FirebaseObjectObservable<Perfil>

	usuario = {} as Perfil;

  constructor(public navCtrl: NavController,
  	public navParams: NavParams,
  	private fire: AngularFireAuth,
  	private afDatabase: AngularFireDatabase) {

		this.fire.authState.subscribe(user => {
			if(user && user.email && user.uid) {
				this.afDatabase.object(`perfil/${user.uid}`).subscribe( usuario => {
					this.usuario = usuario;
					if(this.usuario.nome) {
						console.log(this.usuario.nelorepo, 'Este usuario possui perfil')
					}
					else {
						console.log('Este Usuário não possui perfil');
					}
				})
			}
		});

	}
	  
	editarPerfil() {
		this.fire.authState.take(1).subscribe(auth => {
			this.afDatabase.object(`perfil/${auth.uid}`).set(this.perfil)
			.then(() => this.navCtrl.setRoot("PerfilPage"));
		})
	}

	ionViewWillLoad() {
	}

}
