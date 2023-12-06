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
  
  donutColors: string[] = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF']; 

  dataLegend:ApexLegend={
    show:false
  }
  
  constructor(){
    
  }
}
