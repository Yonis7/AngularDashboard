import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DashboardService } from 'src/app/modules/dashboard.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Chrome', weight: 61.41, symbol: 'Ch' },
  { position: 2, name: 'Internet Explorer', weight: 11.84, symbol: 'IE' },
  { position: 3, name: 'Firefox', weight: 10.85, symbol: 'Fx' },
  { position: 4, name: 'Edge', weight: 4.67, symbol: 'Ed' },
  { position: 5, name: 'Safari', weight: 4.18, symbol: 'Sf' }
]

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  bigChart: { name: string; data: number[]; }[] = [];
  cards: any[] = [];
  pieChart: any = []; // Fix: Explicitly type pieChart as an array of objects with specific properties
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator; // Fix: Add the "!" operator to indicate that the property will be initialized later

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.bigChart = this.dashboardService.bigChart();
    this.cards = this.dashboardService.cards();
    this.pieChart = this.dashboardService.pieChart();

    this.dataSource.paginator = this.paginator;
  }

}
