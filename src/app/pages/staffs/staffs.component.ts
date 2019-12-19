import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../_services/index';
import { AuthenticationService } from '../../_services/index';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';

import * as $ from 'jquery';

@Component({
  selector: 'app-staffs',
  templateUrl: './staffs.component.html',
  styleUrls: ['./staffs.component.scss']
})
export class StaffsComponent implements OnInit {
  addstaffForm: FormGroup;
  dtExportButtonOptions: any = {};
  submitted = false;
  groupId: any;
  staffData: any = [];
  loading: boolean = true;
  dtOptions: any = {};
  modal: any;
  dialog: any;
  centered: any;
  constructor(private common: CommonService,
    private auth: AuthenticationService,
    private formBuilder: FormBuilder,
    private toastr: ToastrManager) { }

  ngOnInit() {

    this.addstaffForm = this.formBuilder.group({
      name: ['', Validators.required],
      phonum: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      designation: ['', Validators.required],
      // staffsidentity : ['',Validators.required], 
      salamount: ['', Validators.required],
      workhours: ['', Validators.required],

    });
    this.liststaff();
  }
  url: any;
  buttons: any = [];
  liststaff() {
    this.loading = true;
    let grp_id = this.auth.getGroup_id();
    this.common.getStaffs(grp_id).subscribe(data => {
      this.staffData = data;
      this.loading = false;
    })

  }
  get f() { return this.addstaffForm.controls; }

  onCreate(addStaff) {
    this.submitted = true;
    if (this.addstaffForm.invalid) {
      return;
    }
    addStaff.hide();
    this.loading = true;
    let postdata =
    {
      "name": this.f.name.value,
      "mobile_number": this.f.phonum.value,
      "email": this.f.email.value,
      "designation": this.f.designation.value,
      "staff_identity": this.model.staff_identity,
      "shift_hours": this.model.shift_hours,
      "salary_amount": this.model.salary_amount,
      "group_id": this.auth.getGroup_id()
    }
    this.common.createStaff(postdata).subscribe(data => {
      console.log(data);
      if (data && data.json && data.json.response && data.json.response.status != 'error') {
        this.loading = false;

        /*         $('#staffs-list').DataTable( {
                  dom: 'Bfrtip',
                  buttons: [
                      'copyHtml5',
                      'excelHtml5',
                      'csvHtml5',
                      'pdfHtml5'
                  ]
                } );
        
         */
        this.toastr.successToastr(data.json.response.message, 'Added Successfully', {
          enableHtml: true, position: 'top-center'
        });

        this.liststaff();
        this.model = {};
      } else {
        addStaff.show();
        this.toastr.errorToastr(data.json.response.message, 'Error');
      }
    })
  }

  onUpdate(onUpdate) {

    this.submitted = true;
    if (this.addstaffForm.invalid) {
      return;
    }
    onUpdate.hide();
    this.loading = true;
    let postdata = {
      "name": this.f.name.value,
      "mobile_number": this.f.phonum.value,
      "email": this.f.email.value,
      "designation": this.f.designation.value,
      "staff_identity": this.model.staff_identity,
      "shift_hours": this.model.shift_hours,
      "salary_amount": this.model.salary_amount,
      "group_id": this.auth.getGroup_id()
    };
    this.common.updateStaff(postdata, this.model.userId).subscribe(data => {
      console.log(data);
      if (data && data.json && data.json.response && data.json.response.status != 'error') {
        this.toastr.successToastr(data.json.response.message, 'Updated Staffs Successfully');
        document.querySelector('body').classList.remove('modal-open');
        this.liststaff();
      } else {
        this.toastr.errorToastr(data.json.response.message, 'Error');
      }
    })
  }

  delData() {
    this.model = {};
    this.url = '';
  }
  ismodalview: any = true;
  isenlargeimage: any = false;
  enlargeimageprofile: any = true;

  enlargeimage() {
    this.isenlargeimage = true;
    this.enlargeimageprofile = false;
  }
  closeenlargimg() {
    this.isenlargeimage = false;
  }
  onSelectFile(event) {

    let fileList: FileList = event.target.files;
    let file: File = fileList[0];

    if (event.target.files && event.target.files.length > 0) {
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
        reader.onload = (event: any) => { // called once readAsDataURL is completed
          this.url = event.target.result;
        }
        reader.readAsDataURL(event.target.files[0]); // read file as data url
      }
    }
  }

  clearimage() {
    this.url = '';
  }

  noImg() {
    this.url = '/assets/images/no-image-available.png'
  }

  model: any = {};
  assignData(data) {

    this.model = {};
    this.model.id = data.id;
    this.model.userId = data.id;
    if (data.designation != '' && data.designation != null) {
      this.model.designation = data.designation;
    } else {
      this.model.designation = '';
    }
    if (data.name != '' && data.name != null) {
      this.model.name = data.name;
    } else {
      this.model.name = '';
    }
    if (data.email != '' && data.email != null) {
      this.model.email = data.email;
    } else {
      this.model.email = '';
    }
    if (data.staff_identity != '' && data.staff_identity != null) {
      this.model.staff_identity = data.staff_identity;
    } else {
      this.model.staff_identity = '';
    }
    if (data.mobile_number != '' && data.mobile_number != null) {
      this.model.mobile_number = data.mobile_number;
    } else {
      this.model.mobile_number = '';
    }

    if (data.shift_hours && data.shift_hours != '' && data.shift_hours != null) {
      this.model.shift_hours = data.shift_hours;
    } else {
      this.model.shift_hours = '';
    }

    if (data.salary_amount && data.salary_amount != '' && data.salary_amount != null) {
      this.model.salary_amount = data.salary_amount;
    } else {
      this.model.salary_amount = '';
    }
    this.model.image = {
      profile_image: data.profile_image,
      profile_image_medium: data.profile_image_medium,
      profile_image_thumb: data.profile_image_thumb
    };
    this.url = data.profile_image_medium;
    console.log("assignData", this.model)
  }
}