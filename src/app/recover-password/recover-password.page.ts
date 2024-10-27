import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.page.html',
  styleUrls: ['./recover-password.page.scss'],
})
export class RecoverPasswordPage {
  username: string = '';
  newPassword: string = ''; 
  message: string = '';

  constructor(private alertController: AlertController, private router: Router) {}

  
  async recoverPassword() {
    if (this.username.trim() === '' || this.newPassword.trim() === '') {
      
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor, ingresa tu nombre de usuario y nueva contraseña.',
        buttons: ['OK']
      });
      await alert.present();
    } else {
      
      this.message = `La contraseña del usuario ${this.username} ha sido restablecida.`;

      const alert = await this.alertController.create({
        header: 'Recuperación Exitosa',
        message: this.message,
        buttons: ['OK']
      });
      await alert.present();

      this.router.navigate(['/home']);
    }
  }
}
