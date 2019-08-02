import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UtilsService {

    // Observable for show/hide validate vocuher modal
    public updateCartValue$: Observable<any>;
    private updateCartValueSubject = new Subject<boolean>();

    constructor(
        private http: HttpClient
    ) {
        // Init the observables
        this.updateCartValue$ = this.updateCartValueSubject.asObservable();
    }

    public getJSONFile = (fileName): any => {
        return this.http.get(`./assets/files/${fileName}`);
    }

    public updateCartValue = (value) => {
        this.updateCartValueSubject.next(value);
    }

}
