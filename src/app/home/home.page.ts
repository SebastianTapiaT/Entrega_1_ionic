import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular'; // Añadido AlertController
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  message: string;
  username: string;
  password: string;

  constructor(
    private toastController: ToastController,
    private router: Router,
    private loginService: LoginService,
    private alertController: AlertController // Añadido
  ) {
    this.message = 'Bienvenido!';
    this.username = '';
    this.password = '';
  }

  generateMessage() {
    return 'Bienvenido!';
  }

  async validateLogin() {
    console.log("Ejecutando validacion PAGE!");

    if (this.loginService.validateLogin(this.username, this.password)) {
      this.showToastMessage('Acceso Correcto', 'success');
      const extras: NavigationExtras = {
        state: {
          username: this.username
        }
      };

      this.router.navigate(['/index'], extras);
    } else {
      this.showToastMessage('Acceso Erroneo', 'danger');
    }
  }

  async showToastMessage(message: string, color: string) {
    const toast = await this.toastController.create({
      duration: 5000,
      message: message,
      position: 'bottom',
      color: color
    });
    toast.present();
  }

  recoverPassword() {
    console.log('Recuperar contraseña');
    this.router.navigate(['/recover-password']);
  }

  async scanQR() {
    const alert = await this.alertController.create({
      header: 'Próximamente',
      message: 'Esta funcionalidad estará disponible pronto.',
      buttons: ['OK']
    });

    await alert.present();
  }
}
