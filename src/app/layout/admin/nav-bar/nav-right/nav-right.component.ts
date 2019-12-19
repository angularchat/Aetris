import { Component, DoCheck, OnInit } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { animate, style, transition, trigger } from '@angular/animations';
import { DattaConfig } from '@app/app-config';
import { AuthenticationService, CommonService } from '../../../../_services/index';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-nav-right',
  templateUrl: './nav-right.component.html',
  styleUrls: ['./nav-right.component.scss'],
  providers: [NgbDropdownConfig],

  animations: [
    trigger('slideInOutLeft', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('300ms ease-in', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ transform: 'translateX(100%)' }))
      ])
    ]),
    trigger('slideInOutRight', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('300ms ease-in', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ transform: 'translateX(-100%)' }))
      ])
    ])
  ]
})

export class NavRightComponent implements OnInit, DoCheck {

  public visibleUserList: boolean;
  public chatMessage: boolean;
  public friendId: boolean;
  public dattaConfig: any;
  GuestType: any;
  modal: any;
  dialog: any;
  centered: any;
  updategroupForm: FormGroup;

  constructor(config: NgbDropdownConfig, public auth: AuthenticationService,
    public router: Router, private formBuilder: FormBuilder, private common: CommonService, ) {
    config.placement = 'bottom-right';
    this.visibleUserList = false;
    this.chatMessage = false;
    this.dattaConfig = DattaConfig.config;
  }

  ngOnInit() {

    this.updategroupForm = this.formBuilder.group({
      name: ['', Validators.required],
      phonum: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });

    this.getUserDetails();

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
  userData: any;
  url: any;
  getDetails() {
    this.auth.userDetail().subscribe(data => {
      this.userData = data;
    })
  }

  guestChange(event) {
    console.log("Event", event);
  }

  onChatToggle(friend_id) {
    this.friendId = friend_id;
    this.chatMessage = !this.chatMessage;
  }

  ngDoCheck() {
    if (document.querySelector('body').classList.contains('datta-rtl')) {
      this.dattaConfig['rtl-layout'] = true;
    } else {
      this.dattaConfig['rtl-layout'] = false;
    }
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

  onSelectFile(event) {

    let fileList: FileList = event.target.files;
    let file: File = fileList[0];

    if (event.target.files && event.target.files.length > 0) {
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
        reader.onload = (event: any) => { // called once readAsDataURL is completed
          this.url = event.target.result;
          this.details.cover_image_medium = event.target.result;
        }
        reader.readAsDataURL(event.target.files[0]); // read file as data url
      }
    }
  }

  clearimage(data) {
    data.cover_image_medium = '';
    this.url = '';
  }

  submitted: boolean = false;

  onSubmit(f) {
    this.submitted = true;
    if (this.updategroupForm.invalid) {
      return;
    }
  }

  details: any = '';
  getUserDetails() {

    if (JSON.parse(localStorage.getItem('currentaetrisUser')) && JSON.parse(localStorage.getItem('currentaetrisUser')) != null && JSON.parse(localStorage.getItem('currentaetrisUser')) != '') {
      let data: any;
      data = JSON.parse(localStorage.getItem('currentaetrisUser'));
      console.log("data" + data);
      if (data && data != null && data.name) {
        var userDetail = {
          name: data.name,
          email: data.email,
          mobile_number: data.mobile_number,
          cover_image_medium: data.cover_image_medium
        }
      }
      this.details = userDetail;
    }
  }

  noImg(_req) {
    _req = '/assets/images/no-image-available.png'
  }

  groupUpdate() {

  }
}
