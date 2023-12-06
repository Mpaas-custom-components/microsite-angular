import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  transactions = [
    {
      transactionType: "Uang Masuk",
      transactionAmount: "+Rp500.000",
      trasnactionForm: "BNI - Juan Alfonsus"
    },
    {
      transactionType: "Gaji",
      transactionAmount: "+Rp5.000.000",
      trasnactionForm: "BNI - Andrian Kusuma"
    },
    {
      transactionType: "Uang Masuk",
      transactionAmount: "+Rp750.000",
      trasnactionForm: "BNI - Juan Alfonsus"
    },
    {
      transactionType: "Uang Masuk",
      transactionAmount: "+Rp7.500.000",
      trasnactionForm: "BNI - Hamzah Payumbuan"
    },
    {
      transactionType: "Uang Masuk",
      transactionAmount: "+Rp1.500.000",
      trasnactionForm: "BNI - Giri Payumbuan"
    },
    {
      transactionType: "Uang Masuk",
      transactionAmount: "+Rp1.500.000",
      trasnactionForm: "BNI - Giri Payumbuan"
    },
    {
      transactionType: "Uang Masuk",
      transactionAmount: "+Rp1.500.000",
      trasnactionForm: "BNI - Giri Payumbuan"
    },
    {
      transactionType: "Uang Masuk",
      transactionAmount: "+Rp1.500.000",
      trasnactionForm: "BNI - Giri Payumbuan"
    },
  ]

  private initY = 0
  private lastY = 0
  offsetY = 0
  style = `transform: translateY(0px);`

  constructor() {

  }

  onTouchStart(e: TouchEvent) {
    this.initY = e.touches[0].clientY
  }

  onTouchMove(e: TouchEvent) {
    let move = e.touches[0].clientY - this.initY + 11 + this.lastY

    if (move < -200 || move > 0) return
    if (move > 0) {
      this.lastY = move
    }

    this.offsetY = move
    this.style = `transform: translateY(${move}px);`
  }

  onTouchEnd(e: TouchEvent) {

    let move = e.changedTouches[0].clientY - this.initY + 11
    console.log(move, 'end')

    if (move < 0) {
      this.offsetY = -200
      this.lastY = -200
      this.style = `transform: translateY(-200px);`

    } else if (move > 0) {
      this.offsetY = 0
      this.lastY = 0
      this.style = `transform: translateY(0px);`

    }
  }
}
