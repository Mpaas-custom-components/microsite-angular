import { Component,ViewChild  } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexNonAxisChartSeries,
  ApexPlotOptions, 
  ApexLegend
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  labels:string[]
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {
 
  pieSeries : ApexNonAxisChartSeries = [10, 41, 35, 51, 49];
  chartPie : ApexChart={
    type:'donut',
    width:250,
    height:250,
  
  }
  lebelsDetail = {
    show:false
  }
  chartDataLabels : ApexDataLabels ={
    enabled:false
  }

  markers={
    radius:10
  }
  
  donutColors: string[] = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF']; 

  dataLegend:ApexLegend={
    show:false
  }
  
  dataPlotOptions= {
    pie: {
      donut: {
        size: '60%',
        rounded:'50%'
      },
     
    }
    }
    dataStroke= {
      show:true,
      width: 10,
      radius:10,
      // OR provide an array
     
    }

    options = {
      height: 300,
      forceFit: true,
    }
    
    ready(chart:any) {
      const data = [
        { month: 'Jan', temperature: 7.0 },
        { month: 'Feb', temperature: 6.9 },
        { month: 'Mar', temperature: 9.5 },
        { month: 'Apr', temperature: 14.5 },
        { month: 'May', temperature: 18.2 },
        { month: 'Jun', temperature: 21.5 },
        { month: 'Jul', temperature: 25.2 },
        { month: 'Aug', temperature: 26.5 },
        { month: 'Sep', temperature: 23.3 },
        { month: 'Oct', temperature: 18.3 },
        { month: 'Nov', temperature: 13.9 },
        { month: 'Dec', temperature: 9.6 },
      ];

      chart.source(data, {
        month: {
          alias: '月份',
          range: [0, 1],
        },
        temperature: {
          alias: '平均温度(°C)',
        },
      });
      chart
        .line()
        .position('month*temperature')
        .size(2);
      chart.render();
    }
}
