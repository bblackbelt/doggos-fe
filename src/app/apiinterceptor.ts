import {Inject, Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class APIInterceptor implements HttpInterceptor {

    constructor(@Inject('BASE_API_URL') private baseUrl: string) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(`${this.baseUrl}/${req.url}`);
        const apiReq = req.clone({ url: `${this.baseUrl}/${req.url}` });
        return next.handle(apiReq);
    }
}
