import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Banda } from './Banda';
import { Observable } from 'rxjs';
import { Banda_detail } from './banda_detail';

@Injectable({
 providedIn: 'root'
})
export class BandaService {

  private apiUrl: string = environment.baseUrl;

constructor(private http: HttpClient) { }

getBandas(): Observable<Banda[]> {
  return this.http.get<Banda[]>(this.apiUrl);
}



}
