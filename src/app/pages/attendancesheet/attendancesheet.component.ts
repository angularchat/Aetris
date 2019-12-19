import { Component, OnInit } from '@angular/core';

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

@Component({
  selector: 'app-attendancesheet',
  templateUrl: './attendancesheet.component.html',
  styleUrls: ['./attendancesheet.component.scss']
})

export class AttendancesheetComponent implements OnInit {

  constructor() { }

  dayList: any = [];
  datelist: any;
  changedDate: any = new Date();

  ngOnInit() {
    let date = new Date();
    let month = date.getMonth();
    let year = date.getFullYear();

    let dayName = date.getDate();
    console.log("getDate", dayName);
    if (dayName < 10) {
      var setday = "0" + dayName;
      /*       console.log(setday); */
    }
    this.changedDate = date.getFullYear() + '-' + setday;
    this.dayList = this.daysCount(year, month);
    console.log('dayList', this.dayList);
    var temp = []
    this.dayList.forEach(element => {
      var day, dayname;
      day = element.getDate();
      dayname = this.getDayName(element);
      let obj = {
        day: day,
        dayname: dayname,
        value: 'test',
      }
      temp.push(obj);
    });

    console.log("obj", temp);
    this.datelist = temp;
  }

  daysCount(year, month) {
    var date = new Date(Date.UTC(year, month, 1));
    var days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  }

  getDayName(dateFormate) {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      date = new Date(dateFormate);
    return days[date.getDay()];
  }
  monthName: any = '';
  changeDate(event) {
    console.log('event, changeDate', event);

    let updateDate = new Date(event.target.value);

    this.monthName = monthNames[updateDate.getMonth()];

    console.log("Date", updateDate);
  }
  calenderShow: boolean = false;

  calnderShowfn() {
    this.calenderShow = !this.calenderShow
  }
}
