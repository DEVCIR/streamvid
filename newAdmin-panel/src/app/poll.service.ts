import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Poll } from './poll.model';

@Injectable({
  providedIn: 'root'
})
export class PollService {
  private apiUrl = 'http://kaanolic.w37.wh-2.com/api/poll';

  constructor(private http: HttpClient) {}

  getPolls(): Observable<Poll[]> {
    return this.http.get<Poll[]>(this.apiUrl);
  }

  createPoll(poll: Poll): Observable<Poll> {
    return this.http.post<Poll>(this.apiUrl, poll);
  }

  updatePoll(id: string, poll: Poll): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, poll);
  }

  deletePoll(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
