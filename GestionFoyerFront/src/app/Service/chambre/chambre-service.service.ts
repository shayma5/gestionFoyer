import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Chambre } from 'src/app/models/Chambre';

@Injectable({
  providedIn: 'root'
})
export class ChambreServiceService {

  constructor(private httpClient: HttpClient) { }

  getAllData(): Observable<Chambre[]> {
    return this.httpClient.get<Chambre[]>('http://localhost:3031/chambre/chambres');
  }

  addChambre(chambre: any) {
    return this.httpClient.post('http://localhost:3031/chambre/new/bloc', chambre)
  }

  getBlocNames(): Observable<string[]> {
    return this.httpClient.get<string[]>('http://localhost:3031/chambre/blocnames');
  }

  deleteChambre(id: any) {
    return this.httpClient.delete('http://localhost:3031/chambre/delete/' + id);
  }

  editChambre(id: any, chambre: any): Observable<any> {
    return this.httpClient.put('http://localhost:3031/chambre/update/' + id, chambre);
  }

  getChambre(id: any) {
    return this.httpClient.get('http://localhost:3031/chambre/getId/' + id);
  }
}
