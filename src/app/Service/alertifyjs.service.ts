import { Injectable } from '@angular/core';
declare let alertify;
@Injectable({
  providedIn: 'root'
})
export class AlertifyjsService {

  constructor() { }
  success(message: string) {
    alertify.success(message);
  }
  error(message: string) {
    alertify.error(message);
  }
  warning(message: string) {
    alertify.warning(message);
  }
 confirm(message: string) {
   alertify.confirm(message);
 }
}
