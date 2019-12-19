import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrManager } from 'ng6-toastr-notifications';
import { AuthenticationService } from '../_services/index';

@Component({
    templateUrl: 'login.component.html',
    styleUrls: ['./loader.scss']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    modal: any;
    dialog: any;
    centered: any;
    submitted = false;
    returnUrl: string;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private toastr: ToastrManager
    ) {
        // redirect to home if already logged in
        if (localStorage.getItem('currentaetrisUser')) {
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        //  this.router.navigate([this.returnUrl]);

        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.authenticationService.login(this.f.email.value, this.f.password.value)
            .pipe()
            .subscribe(
                data => {
                    if (data && data.json && data.json.response && data.json.response.status != 'error') {
                        this.toastr.successToastr(data.json.response.message, "Success");
                        this.loading = false;
                        this.router.navigate(['/']);
                    } else {
                        if (data.json.response.status)
                            this.loading = false;
                        this.toastr.errorToastr(data.json.response.status, data.json.response.message);
                    }
                }, (error: any) => {
                    this.loading = false;
                    console.log("connection was wrong", error);
                    this.toastr.errorToastr('Error', 'Credentials are incorrect');
                }
            );
    }
}
