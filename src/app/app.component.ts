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
  name :string = "Nombre";
  credit_card_number: string = "1234 1234 1234 1234";
  expiration_date: string = "MM/YY";
  cvv: string = "..";
  address: string = "Av.morelos #123";
  confirm_payment: string = "Confirmar pago";
  payment_info: string = "Informacion de Pago";
  full_name: string = "Nombre Completo";
  card_number_label: string = "Numero de Tarjeta de Credito";
  expiration_date_label: string = "Fecha vencimiento";
  cvv_label: string = "CVV";
  address_label: string = "Direccion";
  verify_data_label: string = "Verificas que esta informacion es correcta";

  make_payment() {
    console.log("make payment");
  }
}
