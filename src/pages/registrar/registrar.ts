import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AlertProvider } from '../../providers/alert/alert'; 

@IonicPage()
@Component({
  selector: 'page-registrar',
  templateUrl: 'registrar.html',
})
export class RegistrarPage {

  newUser: FormGroup = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ])
  });

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private alert: AlertProvider,
    private fire: AngularFireAuth) {
  }

  registrar() {
    let username: string = this.newUser.value.username;
    let password: string = this.newUser.value.password;
    this.fire.auth.createUserWithEmailAndPassword(username, password)
      .then(res => {
        this.alert.showAlert('Cadastro', 'Cadastro efetuado com sucesso!');
        this.navCtrl.pop();
      })
      .catch(error => {
        error.code === 'auth/email-already-in-use' ?
          this.alert.showAlert('Ops', 'Este e-mail já existe') :
          this.alert.showAlert('Ops', 'Ocorreu algum erro');
      });
  }

}
