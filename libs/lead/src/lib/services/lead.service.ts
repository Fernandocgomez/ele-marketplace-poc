import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, first, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface Lead {
    id: string;

    [key: string]: any;
}

const data = 'assets/data.json';

@Injectable()
export class LeadService {

    private _lead: BehaviorSubject<Lead> = new BehaviorSubject<Lead>({
		id: ''
	});

    private lead: Observable<Lead> = this._lead.asObservable();

    get lead$(): Observable<Lead> {
		return this.lead;
	}

    callServer(): Observable<any> {
        return this.http.get<any>('http://localhost:3333/api/lead/1').pipe(delay(1500))
    }

    updateLead(lead: Lead): Observable<any> {
        return this.http.put<any>('http://localhost:3333/api/lead', lead).pipe(delay(1500))
    }
  
    constructor(private http: HttpClient) {
        this.lead = this.callServer();
    }
  
}