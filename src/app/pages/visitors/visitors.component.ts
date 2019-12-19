import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../../_services/index'
import { AuthenticationService } from '../../_services/index'
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-visitors',
  templateUrl: './visitors.component.html',
  styleUrls: ['./visitors.component.scss']
})
export class VisitorsComponent implements OnInit {
  addvisitorForm: FormGroup;
  visitorsData: any = [];
  loading: boolean = true;
  submitted = false;
  modal: any;
  dialog: any;
  centered: any;
  modelPopup: any;
  constructor(private formBuilder: FormBuilder,
    private commen: CommonService,
    private auth: AuthenticationService,
    private toastr: ToastrManager) { }

  ngOnInit() {
    this.addvisitorForm = this.formBuilder.group({
      name: ['', Validators.required],
      phonum: ['', Validators.required]
    });
    this.listvisitor();
  }
  url: any;
  static: any;
  listvisitor() {
    this.loading = true;
    let grp_id = this.auth.getGroup_id();
    this.commen.getVisitors(grp_id).subscribe(data => {
      this.visitorsData = data;
      this.loading = false;
    })
  }

  noImg() {
    this.url = '/assets/images/no-image-available.png'
  }
  selectDate() {

  }
  editStaff() {
  }

  get f() { return this.addvisitorForm.controls; }

  onUpdate(editVisitor) {
    this.submitted = true;
    if (this.addvisitorForm.invalid) {
      return;
    }

    let postdata = {
      "name": this.f.name.value,
      "mobile_number": this.f.phonum.value,
      "group_id": this.auth.getGroup_id()
    }

    this.commen.updateVisitors(postdata, '').subscribe(data => {
      if (data && data.json && data.json.response && data.json.response.status != 'error') {
        this.toastr.successToastr(data.json.response.message, 'Success');
        editVisitor.hide();
        this.model = {};
        this.listvisitor();
      } else {
        editVisitor.show();
        this.toastr.errorToastr(data.json.response.message, 'Error');
      }
    })
  }

  onCreate(addVisitor) {
    this.submitted = true;
    if (this.addvisitorForm.invalid) {
      return;
    }
    let postdata = {
      "name": this.f.name.value,
      "mobile_number": this.f.phonum.value,
      "group_id": this.auth.getGroup_id()
    }

    this.commen.createVisitors(postdata).subscribe(data => {
      console.log(data);
      if (data && data.json && data.json.response && data.json.response.status != 'error') {
        this.toastr.successToastr(data.json.response.message, 'Success');
        addVisitor.hide();
        this.listvisitor();
      } else {
        addVisitor.show();
        this.toastr.errorToastr(data.json.response.message, 'Error');
      }
    })
  }

  model: any = {};

  assignData(data) {

    this.model = {};
    console.log("assignData", data);
    if (data.company_name && data.company_name != '' && data.company_name != '') {
      this.model.company_name = data.company_name;
    }
    if (data.description && data.description != '' && data.description != '') {
      this.model.description = data.description;
    }
    this.model.id = data.id;
    if (data.name && data.name != '' && data.name != '') {
      this.model.name = data.name;
    }
    if (data.mobile_number && data.mobile_number != '' && data.mobile_number != '') {
      this.model.mobile_number = data.mobile_number;
    }
    if (data.purpose_of_visit && data.purpose_of_visit != '' && data.purpose_of_visit != '') {
      this.model.purpose_of_visit = data.purpose_of_visit;
    }
    if (data.onboarding && data.onboarding != '' && data.onboarding != '') {
      this.model.onboarding = data.onboarding;
    }

    if (data.profile_image_medium && data.profile_image_medium != '' && data.profile_image_medium != '') {
      this.model.profile_image_medium = data.profile_image_medium;
      this.url = data.profile_image_medium;
    } else {
      this.url = ''
    }
  }

  delData() {
    this.model = {}
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
  onSelectFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url
      reader.onload = (event: any) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      }
    }
  }

  clearimage() {
    this.url = '';
  }
}


