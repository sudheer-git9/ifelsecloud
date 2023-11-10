import { Component } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

/* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  ngOnInit() {
    this.loadColumnChart();
    this.loadAngularGaugeChart();
  }

  loadColumnChart() {

    // Create chart instance
    let chart = am4core.create("barChart", am4charts.XYChart);


    // Add data
    chart.data = [{
      "month": "Jan",
      "europe": 25,
      "namerica": 40,
      "asia": 20,
    }, {
      "month": "Feb",
      "europe": 23,
      "namerica": 18,
      "asia": 30,

    }, {
      "month": "Mar",
      "europe": 20,
      "namerica": 24,
      "asia": 10,
    }, {
      "month": "Apr",
      "europe": 10,
      "namerica": 29,
      "asia": 14,
    }, {
      "month": "May",
      "europe": 30,
      "namerica": 30,
      "asia": 10,
    }, {
      "month": "Jun",
      "europe": 30,
      "namerica": 23,
      "asia": 10,
    }, {
      "month": "Jul",
      "europe": 30,
      "namerica": 20,
      "asia": 10,
    }, {
      "month": "Aug",
      "europe": 40,
      "namerica": 20,
      "asia": 10,
    }, {
      "month": "Sep",
      "europe": 23,
      "namerica": 18,
      "asia": 10,
    }, {
      "month": "Oct",
      "europe": 12,
      "namerica": 20,
      "asia": 20,
    }, {
      "month": "Nov",
      "europe": 30,
      "namerica": 23,
      "asia": 10,
    }, {
      "month": "Dec",
      "europe": 23,
      "namerica": 40,
      "asia": 10,
    }
    ];

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "month";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.grid.template.disabled = true;
    categoryAxis.title.text = "Month";
    categoryAxis.renderer.fontSize = 12;
    categoryAxis.renderer.minGridDistance = 20;
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    valueAxis.min = 0;
    valueAxis.max = 100
    valueAxis.title.text = "Security rating"
    valueAxis.renderer.fontSize = 12;

    this.createSeries("europe", "Europe", chart, "#6343bf");
    this.createSeries("namerica", "North America", chart, "#9879e6");
    this.createSeries("asia", "Asia-Pacific", chart, "#eaecf0");

  }

  // Create series
  createSeries(field: any, name: any, chart: any, color: string) {

    // Set up series
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.name = name;
    series.dataFields.valueY = field;
    series.dataFields.categoryX = "month";
    // series.sequencedInterpolation = false;

    // Make it stacked
    series.stacked = true;

    // Configure columns
    series.columns.template.width = am4core.percent(50);
    series.strokeWidth = 0;
    series.columns.template.fill = am4core.color(color);
    series.columns.template.column.cornerRadiusTopLeft = 5;
    series.columns.template.column.cornerRadiusTopRight = 5;
    // series.columns.template.tooltipText = "[bold]{name}[/]\n[font-size:14px]{categoryX}: {valueY}";

    // Add label
    let labelBullet = series.bullets.push(new am4charts.LabelBullet());
    // labelBullet.label.text = "{valueY}";
    labelBullet.locationY = 0.5;
    labelBullet.label.hideOversized = true;

    return series;
  }

  loadAngularGaugeChart() {

    // create chart
    let chart: any = am4core.create("angularChart", am4charts.GaugeChart);
    chart.innerRadius = am4core.percent(82);



    let axis2: any = chart.xAxes.push(new am4charts.ValueAxis());
    axis2.min = 0;
    axis2.max = 100;
    axis2.strictMinMax = true;
    axis2.renderer.labels.template.disabled = true;
    axis2.renderer.ticks.template.disabled = true;
    axis2.renderer.grid.template.disabled = true;

    let range0 = axis2.axisRanges.create();
    range0.value = 0;
    range0.endValue = 100;
    range0.axisFill.fillOpacity = 1;
    range0.axisFill.fill = am4core.color('#ccc');

    let range1: any = axis2.axisRanges.create();
    range1.value = 0;
    range1.endValue = 80;
    range1.axisFill.fillOpacity = 1;
    range1.axisFill.fill = am4core.color('#6343bf');

    /**
     * Label
     */

    let label = chart.radarContainer.createChild(am4core.Label);
    label.isMeasured = false;
    label.fontSize = 40;
    label.horizontalCenter = "middle";
    label.verticalCenter = "bottom";
    label.text = "240";

  }
}
