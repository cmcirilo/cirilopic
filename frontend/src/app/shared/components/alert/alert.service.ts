import { Subject } from 'rxjs';
import { Alert, AlertType } from './alert';

export class AlertService {

  alertSubject: Subject<Alert>;

  success(message: string) {
    this.alert(AlertType.SUCESS, message);
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
    this.alertSubject.next(alertType, message);
  }
}
