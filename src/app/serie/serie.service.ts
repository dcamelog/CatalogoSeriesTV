import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Serie } from './serie';
import { SerieDetail } from './serieDetail';


const URL:string = environment.baseUrl;

@Injectable({
  providedIn: 'root'
})
export class SerieService {
private apiUrl:string = environment.baseUrl;

constructor(private http: HttpClient) { }
getSeries(): Observable<SerieDetail[]>{
  return this.http.get<SerieDetail[]>(this.apiUrl)
}
getSerieDetail(serieId:number): Observable<SerieDetail> {
  return this.http.get<SerieDetail>(URL +'/' + serieId);
}

}
