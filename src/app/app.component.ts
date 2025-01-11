import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  loginBody = {
    phone: '01000871334',
    password: 'P@ssw0rd',
    deviceToken: ' ',
  };
  constructor(private authService: AuthService) {}
  ngOnInit() {
    this.login();
  }
  title = 'EL-RIZK-CRM';

  login() {
    this.authService.login(this.loginBody).subscribe((res: any) => {
      if (res) {
        localStorage.setItem('userData', JSON.stringify(res));
      }
    });
  }
}
