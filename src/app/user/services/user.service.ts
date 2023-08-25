import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {RegisterRequestInterface} from '../types/RegisterRequestInterface'
import {Observable, map} from 'rxjs'
import {CurrentUserInterface} from 'src/app/shared/types/currentUserInterface'
import {AuthResponseInterface} from '../types/authResponse.interface'
import { environment } from 'src/environments/environment.development'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
     const url = environment.apiURL + '/user/register'
   
    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map((response) => response.user))
  }
}
