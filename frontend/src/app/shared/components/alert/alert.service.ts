import { Subject } from 'rxjs';
import { Alert, AlertType } from './alert';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AlertService {

  alertSubject: Subject<Alert> = new Subject<Alert>();

  success(message: string) {
    this.alert(AlertType.SUCCESS, message);
  }

  warning(message: string) {
    this.alert(AlertType.WARNING, message);
  }

  danger(message: string) {
    this.alert(AlertType.DANGER, message);
  }

  info(message: string) {
    this.alert(AlertType.INFO, message);
  }

  getAlert() {
    return this.alertSubject.asObservable();
  }

  private alert(alertType: AlertType, message: string) {
    this.alertSubject.next(new Alert(alertType, message));
  }
}
