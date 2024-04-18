// import { Route } from '@angular/router';
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css'
// })

// export class LoginComponent {
//   usuario: string;
//   contrasena: string;

//   constructor(private router: Router) { }

//   login() {
//     if (this.usuario === 'rgonzalez' && this.contrasena === 'rgonzalez') {
//       this.router.navigate(['/dashboard']);
//     } else {
//       alert('Usuario o contraseña incorrectos');
//     }
//   }
// }

import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario: string | undefined;
  contrasena: string | undefined;

  constructor(private router: Router) {}

  login() {
    if (this.usuario === 'rgonzalez' && this.contrasena === 'rgonzalez') {
      this.router.navigate(['/dashboard']);
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }
}
