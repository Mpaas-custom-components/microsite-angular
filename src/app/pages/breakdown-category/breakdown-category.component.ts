import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-breakdown-category',
  templateUrl: './breakdown-category.component.html',
  styleUrls: ['./breakdown-category.component.css']
})
export class BreakdownCategoryComponent {
  chart: any

  constructor(private router: Router) {
    // document.body.setAttribute("style" , "overflow-y : hidden")
  }

  ngOnInit(): void {
    this.createChart();
  }

  handleButton(): void {
    this.router.navigate(['/'])
    console.log("Masuk")
  }

  createChart() {

    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ["January", "February", "March", "April"],
        datasets: [
          {
            label: "Sales",
            data: ['467', '1000', '250', "2000"],
            backgroundColor: '#DADADA',
            borderRadius: 8,
          }
        ]
      },
      options: {
        scales: {
          x: {
            grid: {
              offset: true
            }
          },
          y: {
            grid: {
              offset: true,
              display: false
            },
            ticks: {
              stepSize: 1000
            }
          }
        },
        plugins: {
          legend: {
            display: false // This hides all text in the legend and also the labels.
          }
        },
      }
    });
  }
}
