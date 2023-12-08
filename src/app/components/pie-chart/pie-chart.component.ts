import { Component,OnInit,ViewChild  } from '@angular/core';
import { Chart } from 'chart.js/auto';




@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  myChart: any
    ngOnInit(){
     this.myChart = new Chart("myChart", {
        type: 'doughnut',
        data: {
          // labels: [
          //   'Mpaas',
          //   'Blue',
          //   'Yellow'
          // ],
          datasets: [{
            label: 'My First Dataset',
            data: [300, 50, 100,20,40,150],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)'
            ],
            hoverOffset: 2,
            borderRadius:15,

          }]
        },
        // options: {
        //   scales: {
        //     y: {
        //       beginAtZero: false
        //     }
        //   }
        // }
      });
    }
    

}
