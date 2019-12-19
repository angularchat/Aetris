import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService, AuthenticationService } from '@app/_services';
const now = new Date();
@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss']
})
export class TimesheetComponent implements OnInit {

  dtExportButtonOptions: any = {};
  modelPopup: { year: any; month: any; day: any; };
  table: any = '';
  constructor( private route: ActivatedRoute, private common: CommonService, private auth: AuthenticationService) {

    // observable way
    this.route.paramMap.subscribe(params => {

      console.log(params.get('type'));

      if (params.get('type') == 'staffs') {
        this.table = 'staffs';
        this.staffs();
      } else if (params.get('type') == 'guests') {
        this.table = 'guests';
        this.guests();
      } else if (params.get('type') == 'visitors') {
        this.table = 'visitors';
        this.visitors();
      }

    });

   }
  ngOnInit() {
    this.selectToday();
  }

  selectToday() {
    this.modelPopup = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  }
  selectDate(date){
    
  }
  tiesheetsforstaffs: any = [];
  loading: boolean = false;
  staffs() {
    this.loading = true;
    let grp_id = this.auth.getGroup_id();

    this.common.gettimesheetsforStaffs(grp_id).subscribe(data => {
      this.tiesheetsforstaffs = data;
      this.loading = false;
  })

  }

  guests() {

    this.dtExportButtonOptions = {
      ajax: '',
      columns: [{
        title: 'Name',
        data: 'name'
      }, {
        title: 'Check in Time',
        data: 'office'
      }, {
        title: 'Check out Time',
        data: 'age'
      }, {
        title: 'Check date',
        data: 'date'
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

  visitors() {

    this.dtExportButtonOptions = {
      ajax: '',
      columns: [{
        title: 'Name',
        data: 'name'
      }, {
        title: 'Check in Time',
        data: 'office'
      }, {
        title: 'Check out Time',
        data: 'age'
      }, {
        title: 'Check date',
        data: 'date'
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

}
