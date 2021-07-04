import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Studioefficiency } from './studioefficiency'
import { Home } from './home';
import { Apartment } from './apartment';
import { ImageModel } from './imagemodel';
import { Inquiry } from './inquiry';


@Injectable({
  providedIn: 'root'
})
export class ManagementService {

  constructor(private http: HttpClient) { }

  fetchStudioEfficiencies(): Observable<Studioefficiency[]>{

    return this.http.get<Studioefficiency[]>(`http://localhost:8080/api/studioefficiencies`)
  }

  fetchStudioEfficiencyId(id: number):Observable<Studioefficiency>{
    return this.http.get<Studioefficiency>(`http://localhost:8080/api/studioefficiency/${id}`)

  }

  addStudioEfficiency(studioefficiency: Studioefficiency):Observable<Studioefficiency>{
    let token = localStorage.getItem('access_token')
    return this.http.post<Studioefficiency>(`http://localhost:8080/api/studioefficiencies`, studioefficiency);
    {headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)}
  }

  fetchApartments(): Observable<Apartment[]>{

    return this.http.get<Apartment[]>(`http://localhost:8080/api/apartments`)
  }

  fetchApartmentId(id: number):Observable<Apartment>{
    return this.http.get<Apartment>(`http://localhost:8080/api/apartment/${id}`)

  }

  addApartment(apartment: Apartment):Observable<Apartment>{
    let token = localStorage.getItem('access_token')
    return this.http.post<Apartment>(`http://localhost:8080/api/apartments`, apartment);
    {headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)}

  }

  fetchHomes(): Observable<Home[]>{

    return this.http.get<Home[]>(`http://localhost:8080/api/homes`)
  }

  fetchHomeId(id: number):Observable<Home>{
    return this.http.get<Home>(`http://localhost:8080/api/home/${id}`)

  }

  addHome(home: Home):Observable<Home>{
    let token = localStorage.getItem('access_token')
    return this.http.post<Home>(`http://localhost:8080/api/homes`, home);
    {headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)}

  }

  addInquiry(inquiry: Inquiry):Observable<Inquiry>{
    let token = localStorage.getItem('access_token')
    return this.http.post<Inquiry>(`http://localhost:8080/api/inquiry`, inquiry);
    {headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)}

  }

  fetchInquiry(): Observable<Inquiry[]>{
    return this.http.get<Inquiry[]>(`http://localhost:8080/api/inquiry`)

  }

}
