import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Question } from '../models/question.model';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  private url = environment.apiUrl + '/question' ;

  constructor(private http: HttpClient) {}


  createQuestion(question: Question) {
    return this.http.post<Question>(this.url + '/create', question);
  }

  deleteQuestion(id: string) {
    return this.http.post(this.url + '/delete/' + id, id);
  }


  editQuestion(question: Question): Observable<Question> {
    return this.http.post<Question>(this.url + '/edit/' + question._id, question);
  }

  randomQuestion(): Observable<Question[]> {
    return this.http.post<Question[]>('http://localhost:8000/api/randQst/t6f6ij97cf7', {});
  }
}
