import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


export const isAuthenticatedGuard = () => {
  const isAuthenticated = localStorage.getItem('token')
  if (isAuthenticated) {
    return true
  }
  return false
}


// @Injectable({
//   providedIn: 'root'
// })
// export class IsAuthenticatedGuard implements CanActivate {
//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     return true;
//   }

// }
