import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

const baseUrl = 'http://localhost:8080/api/books';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Book[]>{
    return this.http.get<Book[]>(baseUrl);
  }

  findById(id: any): Observable<Book>{
    return this.http.get('${baseUrl}/${id}'); // Corrección aquí
  }

  create(book: Book): Observable<any>{
    return this.http.post(baseUrl, book);
  }

  update(book: Book): Observable<any>{
    return this.http.put(baseUrl, book);
  }

  deleteById(id: any): Observable<any>{
    return this.http.delete('${baseUrl}/${id}'); // Corrección aquí
  }

  deleteAll(): Observable<any>{
    return this.http.delete(baseUrl);
  }
}
