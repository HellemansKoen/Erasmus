import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class Intercepter implements HttpInterceptor {
    intercept(request: HttpRequest<unknown>, 
        next: HttpHandler
        ): Observable<HttpEvent<unknown>> {
            let token = localStorage.getItem('jwtToken') || ''
            const newRequest = request.clone({
                headers: request.headers.set('Authorization',`Bearer ${token}`)
              });
            return next.handle(newRequest);
    }

}