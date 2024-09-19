import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {
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
}
