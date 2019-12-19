import { Injectable } from '@angular/core';
import { HttpClient,  } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '@environments/environment';

@Injectable({ providedIn: 'root' })
export class CommonService {

    constructor(
        private http: HttpClient) {
    }

    createStaff (req) {
        /* {"name" : "Umapathy", "mobile_number" : "98845990842",  "designation" : "Manager", "staff_identity" : "I1232", "group_id" : 36716361 } */
        return this.http.post<any>(`${environment.apiUrl}/staffs`, req)
        .pipe(map(user => {
           return user;
        }));
    }

    updateStaff (req, userId) {
        /* {"name" : "Umapathy", "mobile_number" : "98845990842",  "designation" : "Manager", "staff_identity" : "I1232", "group_id" : 36716361 } */
        return this.http.put<any>(`${environment.apiUrl}/staffs/${userId}`, req, {})
        .pipe(map(user => {
           return user;
        }));
    }

    /* /timesheets?group_id=34531565 */
    
    getStaffs (grp_id) {
        
        return this.http.get<any>(`${environment.apiUrl}/staffs?group_id=` + grp_id)
        .pipe(map(staffs => {
            return staffs;
        }));
    }

    gettimesheetsforStaffs (grp_id) {
        
        return this.http.get<any>(`${environment.apiUrl}/timesheets?group_id=` + grp_id)
        .pipe(map(staffs => {
            return staffs;
        }));
    }

    createGroup(id, req) {
        /* {"name" : "Stately"} */
        return this.http.post<any>(`${environment.apiUrl}/groups?user_id=`+id, req)
        .pipe(map(grp => {
            
            return grp;

        }));
    }

    tiggerOtp(req) {

        /* {"mobile_number" : "9884599084", "group_id" : 1} */
        return this.http.post<any>(`${environment.apiUrl}/send_otp`, req)
        .pipe(map(trigger => {
            
            return trigger;

        }));
    }

    verifyOtp(req) {
        /* {"mobile_number" : "9884599084", "group_id" : 1, "otp_verification_code" : "08954"} */
        return this.http.post<any>(`${environment.apiUrl}/verify_otp`, req)
        .pipe(map(verify => {
            
            return verify;

        }));
    }

    generateOtp(req) {
        /* {"mobile_number" : "9884599084"} */
        return this.http.post<any>(`${environment.apiUrl}/generate_otp`, req)
        .pipe(map(generete => {
            
            return generete;

        }));
    }

    createVisitors(req) {
        /* {"name" : "Umapathy", "mobile_number" : "98845990842",  "designation" : "Manager", "staff_identity" : "I1232", "group_id" : 36716361 } */
        
        return this.http.post<any>(`${environment.apiUrl}/visitors`, req)
        .pipe(map(generete => {
            
            return generete;

        }));
    }


    updateVisitors(req, visitorId) {
        /* {"name" : "Umapathy", "mobile_number" : "98845990842",  "designation" : "Manager", "staff_identity" : "I1232", "group_id" : 36716361 } */
        
        return this.http.put<any>(`${environment.apiUrl}/visitors/${visitorId}`, req)
        .pipe(map(generete => {
            
            return generete;

        }));
    }

    getVisitors(id) {
        return this.http.get<any>(`${environment.apiUrl}/visitors?group_id=` + id)
        .pipe(map(generete => {

            return generete;

        }));
    }

    createGuests(req) {
        /* {"name" : "Umapathy", "mobile_number" : "98845990842",  "designation" : "Manager", "staff_identity" : "I1232", "group_id" : 36716361 } */

        return this.http.post<any>(`${environment.apiUrl}/guests`, req)
        .pipe(map(guest => {
            
            return guest;

        }));
    } 

    getGuests(id) {

        return this.http.get<any>(`${environment.apiUrl}/guests?group_id=` + id)
        .pipe(map(guest => {
            
            return guest;

        }));
    }

    groupUpdate( data, id) {

        return this.http.post<any>(`${environment.apiUrl}/groups?group_id=` + id, { data })
        .pipe(map(guest => {
            
            return guest;

        }));
    }

}