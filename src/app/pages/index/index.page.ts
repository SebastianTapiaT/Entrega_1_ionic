import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular'; // Importa AlertController para mostrar alertas

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
  username!: string;
  name!: string;
  lastname!: string;
  subjet!: string;
  attendance!: string; // Cambiado de `birthday` a `attendance`
  alertButtons: string[] = ['Ok'];

  constructor(private router: Router, private alertController: AlertController) {
    const state = this.router.getCurrentNavigation()?.extras.state;
    console.log('state: ' + JSON.stringify(state));
    if (state) {
      this.username = state['username'];
    }
  }

  ngOnInit() {}

  clean() {
    this.name = '';
    this.lastname = '';
    this.subjet = '';
    this.attendance = ''; // Cambiado de `birthday` a `attendance`
  }

  // Nueva función para escanear el código QR
  async scanQRCode() {
    const alert = await this.alertController.create({
      header: 'Próximamente',
      message: 'Esta funcionalidad estará disponible pronto.',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
