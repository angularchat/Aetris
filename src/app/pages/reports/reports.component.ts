import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

const monthNames = ["January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"
];
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  monthName: any = '';
  dtExportButtonOptions: any = {};
  ngOnInit() {

        const d = new Date();

        this.monthName = monthNames[d.getMonth()];

        this.route.paramMap.subscribe(params => {

          console.log(params.get('type'));
    
          if (params.get('type') == 'staffs') {
            this.staffs();
          } /* else if (params.get('type') == 'guests') {
            this.guests();
          } else if (params.get('type') == 'visitors') {
            this.visitors();
          }  */
        });

  }

  staffs() {

    this.dtExportButtonOptions = {
      ajax: '',
      columns: [{
        title: '#',
        data: 'name'
      }, {
        title: 'Emp Code',
        data: 'emp_code'
      }, {
        title: 'Designation',
        data: 'designation'
      }, {
        title: 'CTC',
        data: 'date'
      }, {
        title: 'Present',
        data: 'present'
      }, {
        title: 'OT',
        data: 'ot'
      }, {
        title: 'Month Days',
        data: 'month_days'
      }, {
        title: 'Weekly Off',
        data: 'weekly_off'
      }, {
        title: 'Payable Days',
        data: 'payable_days'
      }, {
        title: 'Salary',
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
