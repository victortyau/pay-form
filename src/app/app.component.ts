import { Component, Input } from '@angular/core';
import { faCreditCard, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // fields
  name_field!: string;
  card_number_input!: string;
  expiration_date_input!: string;
  cvv_input!: string;
  address_input!: string;

  // labels
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

  ngOnInit() {
    this.name_field = this.name;
    this.card_number_input = this.credit_card_number;
    this.expiration_date_input = this.expiration_date;
    this.cvv_input = this.cvv;
    this.address_input = this.address;
  }

  make_payment() {
    console.log("make payment");
  }

  check_field() {
    this.name_field = ''
  }

  validate_field() {
    if (this.name_field == '') {
      this.name_field = this.name;
    }
  }
}
