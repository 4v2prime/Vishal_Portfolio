import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mail } from './mail';

@Injectable({
  providedIn: 'root'
})
export class MailserviceService {
  private apiurl = '';//my personal api url here
  constructor(private http: HttpClient) { }

  sendMail(mail: Mail): Observable<any> {
    return this.http.post<any>(this.apiurl, mail);
  }
}
