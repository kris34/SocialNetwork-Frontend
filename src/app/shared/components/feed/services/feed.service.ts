import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Observable, map} from 'rxjs'
import {getFeedResponseInterface} from '../types/getFeedResponse.interace'
import {environment} from 'src/environments/environment.development'

@Injectable({
  providedIn: 'root',
})
export class FeedService {
  constructor(private http: HttpClient) {}

  getFeed(url: string): Observable<getFeedResponseInterface> {
    const fullUrl = environment.apiURL + url

    return this.http.get<getFeedResponseInterface>(fullUrl).pipe(map((res) => res))
  }
}
