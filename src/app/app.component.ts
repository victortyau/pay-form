import { Component } from '@angular/core';
import { faCreditCard, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pay-form';
  faCreditCard = faCreditCard;
  faExclamationCircle = faExclamationCircle;
}
