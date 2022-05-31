import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from '../service/token.service';

@Injectable({
  providedIn: 'root'
})
export class PortInterceptorService implements HttpInterceptor {

  constructor(private tokenService: TokenService) { }

 /**
  * The function intercepts the request, clones it, and adds the token to the header
  * @param req - HttpRequest<any> - The request object
  * @param {HttpHandler} next - HttpHandler - the next interceptor in the chain
  * @returns The request is being returned with the token attached to the header.
  */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let intReq = req;
    const token = this.tokenService.getToken();
    if(token != null) {
      intReq = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token)})
    } 
    return next.handle(intReq);
  }
}

export const InterceptProvider = [{provide: HTTP_INTERCEPTORS, useClass: PortInterceptorService, multi: true}];
