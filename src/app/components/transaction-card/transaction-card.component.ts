import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-transaction-card',
  templateUrl: './transaction-card.component.html',
  styleUrls: ['./transaction-card.component.css']
})
export class TransactionCardComponent {
  @Input() transactionType: String | undefined = "Gaji"
  @Input() transactionFrom: String | undefined = "BNI - Ivan Agustinus"
  @Input() transactionAmount: String | undefined = "+Rp2.000.000"

  constructor() {

  }
}
