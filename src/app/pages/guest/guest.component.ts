import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService, AuthenticationService } from '@app/_services';

@Component({
  selector: 'app-guest',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.scss']
})
export class GuestComponent implements OnInit {

  constructor(private common: CommonService, private auth: AuthenticationService) { }
  dtExportButtonOptions: any = {};
  modal: any;
  dialog: any;
  centered: any;
  ngOnInit() {
    this.listGuests();
  }
  url: any;
  guestsData: any = [];
  loading: boolean = false;

  listGuests() {
    this.loading = true;
    let grp_id = this.auth.getGroup_id();
    this.common.getGuests(grp_id).subscribe(data => {
      this.guestsData = data;
      this.loading = false;
    })
  }
  onSelectFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event: any) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      }
    }
  }
  clearimage(){
    this.url='';
  }
}
