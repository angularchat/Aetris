import { Component, OnInit } from '@angular/core';
import {NgbCalendar, NgbDateParserFormatter, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

const now = new Date();

const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  dtExportButtonOptions: any = {};
  dtColumnsReorderOptions: any = {};
  dtResponsiveOptions: any = {};
  dtRowSelectOptions: any = {};
  dtRouterLinkOptions: any = {};
  
  modelPopup: NgbDateStruct;
  monthName: any = '';
  constructor() { }

  ngOnInit() {

  this.enrylist();
  }
  enrylist() {

    this.selectToday();


  const d = new Date();

  this.monthName = monthNames[d.getMonth()];


    this.dtExportButtonOptions = {
      ajax: '',
      columns: [{
        title: '#',
        data: 'name'
      }, {
        title: 'Name',
        data: 'name'
      }, {
        title: 'In Time',
        data: 'office'
      }, {
        title: 'Out Time',
        data: 'age'
      }, {
        title: 'Hours Worked',
        data: 'date'
      }, {
        title: 'Overtime',
        data: 'salary'
      }, {
        title: 'Overtime Salary',
        data: 'salary'
      }
    ],
      dom: 'Bfrtip',
      buttons: [
        'copy',
        'print',
        'excel',
        'csv'
      ]
    };
  }

  selectToday() {
    this.modelPopup = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  }

  selectDate(event) {
    console.log("selectDate", event)
  }
  
  calenderShow: boolean = false;

  calnderShowfn() {
    this.calenderShow = !this.calenderShow
  }

  changeDate(event) {
    console.log('event, changeDate', event);

    let updateDate = new Date (event.target.value);

    this.monthName = monthNames[updateDate.getMonth()];

    console.log("Date", updateDate);
  }

}
