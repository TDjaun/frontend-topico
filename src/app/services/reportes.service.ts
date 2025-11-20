import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportesService {
  private readonly apiUrl = 'http://localhost:3000/reportes'; 

  constructor(private http: HttpClient) {}

  /**
   * Obtiene el reporte en formato Blob (PDF) desde el backend.
   * @param endpoint El sufijo del endpoint (ej. 'resumen-ejecutivo', 'atenciones', 'inventario').
   */
  getReportePdf(endpoint: string): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/${endpoint}`, { 
      responseType: 'blob' 
    });
  }
}