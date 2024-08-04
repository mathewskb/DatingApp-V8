import { HttpInterceptorFn } from '@angular/common/http';
import { AccountService } from '../_services/account.service';
import { inject } from '@angular/core';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  // here before sending the request to api, we need to add the Authorization header
  // request is Immuttable - so we need to clone and append the header
  const accountService = inject(AccountService);

  if (accountService.currentUser()){
    req = req.clone({
      setHeaders : {
        Authorization : `Bearer ${accountService.currentUser()?.token}`
      }
    })
  }

  // register this interceptor in app.config.ts file
  

  return next(req);
};
