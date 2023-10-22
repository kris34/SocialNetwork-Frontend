import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Observable, map} from 'rxjs'
import {StatusInterface} from 'src/app/shared/types/status.interface'
import {statusResponseInterface} from 'src/app/shared/types/statusResponse.interface'
import {environment} from 'src/environments/environment.development'

@Injectable()
export class LikeStatusService {
  constructor(private http: HttpClient) {}

  likeStatus(id: string): Observable<StatusInterface> {
    const url = environment.apiURL + `/status/${id}/like`

    return this.http
      .post<statusResponseInterface>(url, {})
      .pipe(map((res) => res.status))
  }

  dislikeStatus(id: string): Observable<StatusInterface> {
    const url = environment.apiURL + `/status/${id}/dislike`

    return this.http
      .post<statusResponseInterface>(url, {})
      .pipe(map((res) => res.status))
  }
}
