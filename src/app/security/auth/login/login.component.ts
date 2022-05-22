import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginUsuario } from '../../Entity/login-usuario';
import { AuthService } from '../../service/auth.service';
import { TokenService } from '../../service/token.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogged = false;
  isLoginFail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  roles: string[] = [];
  errMsj!: string;

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
/* Checking if the user is already logged in. If so, it sets the isLogged variable to true, and the
isLoginFail variable to false. It also sets the roles variable to the authorities of the user. */
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  /**
   * The function onLogin() is called when the user clicks the login button. It creates a new
   * LoginUsuario object with the username and password entered by the user. Then it calls the login()
   * function of the authService, which returns an Observable. The subscribe() function is called on
   * the Observable, and the data returned by the Observable is stored in the variable data. The token
   * is stored in the local storage of the browser, and the user is redirected to the home page
   */
  onLogin(): void {
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe(
      data => {
        this.isLogged = true;

        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.toastr.success('Bienvenido ' + data.nombreUsuario, 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/']);
      },
      err => {
        this.isLogged = false;
    //    this.errMsj = err.error.thrownError;
        this.toastr.error('Verifique su usuario y contraseña', 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        /*
        console.log(" - - - - - - - - - - - - -")
        console.log("Logged: " + this.isLogged)
        console.log("Username: " + this.nombreUsuario);
        console.log("Pass: " + this.password); 
    //    console.log("Error Msj: " + this.errMsj);
        console.log(" - - - - - - - - - - - - -") */
      }
    );
  }
}