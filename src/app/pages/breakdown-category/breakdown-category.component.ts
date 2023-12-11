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
        labels: ["1-8", "9-15", "15-22", "22-30"],
        datasets: [
          {
            label: "Sales",
            data: ['200000', '1500000', '350000', "700000",],
            backgroundColor: '#DADADA',
            borderRadius: 8,
          }
        ]
      },
      options: {
        scales: {
          x: {
            grid: {
              offset: true,
              display: false
            }
          },
          y: {
            position: "right",
            grid: {
              offset: true
            },
            ticks: {
              stepSize: 100000,
              callback: function(value, index, values) {
                if (+value < 1_000_000) {
                  const newVal = +value / 1_000
                  return newVal + 'rb';
                } else {       
                  const newVal = +value / 1_000_000           
                  return newVal + 'jt'
                }
              },
              align: "inner"
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
