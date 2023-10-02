import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {response} from 'express'
import {Observable, map} from 'rxjs'
import {StatusInterface} from 'src/app/shared/types/status.interface'
import {statusRequestInterface} from 'src/app/shared/types/statusRequest.interface'
import {statusResponseInterface} from 'src/app/shared/types/statusResponse.interface'
import {environment} from 'src/environments/environment.development'

@Injectable({
  providedIn: 'root',
})
export class StatusService {
  constructor(private http: HttpClient) {}

  createStatus(
    statusrequest: statusRequestInterface
  ): Observable<StatusInterface> {
    console.log(statusrequest);
    
    const fullUrl = environment.apiURL + '/status/create'

    return this.http
      .post<statusResponseInterface>(fullUrl, statusrequest)
      .pipe(map((response) => response.status))
  }
}
