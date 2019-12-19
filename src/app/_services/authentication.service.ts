import { Injectable } from '@angular/core';
import { HttpClient,  } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { User } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentaetrisUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(email: string, password: string) {
        console.log(email,password);
        return this.http.post<any>(`${environment.apiUrl}/login`, { email, password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if ( user && user.json && user.json.response && user.json.response.status != 'error' ) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentaetrisUser', JSON.stringify(user.json.response.recordset));
                    this.currentUserSubject.next(user);
                } else {
                    if ( user.json.response.status )
                    console.log("error", user);
                }
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentaetrisUser');
        this.currentUserSubject.next(null);
    }

    getGroup_id() {
        let user = JSON.parse(localStorage.getItem('currentaetrisUser'))
        let group_id = user.group.id;
        return group_id;
    }

    getDetail() {
        let user = JSON.parse(localStorage.getItem('currentaetrisUser'))
        return user;
    }

    userReg() {
        return this.http.post<any>(`${environment.apiUrl}/register`, '')
        .pipe(map(reg => {
            return reg;
        }, (error: any) => {
        }));
    }

    getLoggedId() {
        let user = JSON.parse(localStorage.getItem('currentaetrisUser'))
        return user.id;
    }

    userDetail() {
        let user = this.getLoggedId();
        
        return this.http.get<any>(`${environment.apiUrl}/users/` + user)
        .pipe(map(guest => {
            
            return guest;

        }));

    }

  
}