import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface Lead {
    id: string;

    [key: string]: any;
}

@Injectable()
export class LeadService {

    private _lead: BehaviorSubject<Lead> = new BehaviorSubject<Lead>({
		id: ''
	});

    public lead: Observable<Lead> = this._lead.asObservable();

    get lead$(): Observable<Lead> {
		return this.lead;
	}

    getLead(cookieId: string): Observable<any> {
        return this.http.get<any>(`http://localhost:3333/api/lead/${cookieId}`).pipe(delay(1500))
    }

    updateLead(lead: Lead): Observable<any> {
        return this.http.put<any>('http://localhost:3333/api/lead', lead).pipe(delay(1500))
    }

    createLead(): Observable<any> {
        return this.http.post<any>('http://localhost:3333/api/lead', {}).pipe(delay(1500))
    }
  
    constructor(private http: HttpClient) {}
  
}