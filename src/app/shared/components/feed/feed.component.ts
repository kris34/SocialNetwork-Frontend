import {CommonModule} from '@angular/common'
import {Component, OnInit} from '@angular/core'
import {LoginComponent} from 'src/app/user/components/login/login.component'
import {LeftBarComponent} from '../leftBar/leftBar.component'
import {RightBarComponent} from '../rightBar.ts/rightBar.component'
import {combineLatest, pipe} from 'rxjs'
import {Store} from '@ngrx/store'
import {selectCurrentUser} from 'src/app/user/store/reducers'
import {RouterOutlet} from '@angular/router'
import {feedActions} from './store/actions'
import {selectError, selectFeedData, selectIsLoading} from './store/reducers'

@Component({
  selector: 'mc-feed',
  templateUrl: './feed.component.html',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    LoginComponent,
    LeftBarComponent,
    RightBarComponent,
    CommonModule,
  ],
})
export class FeedComponent implements OnInit {
  apiUrl: string = '/user/feed'
  mySubscription: any
  arrayFromRedux$: any
  data: any

  data$ = combineLatest({
    currentUser: this.store.select(selectCurrentUser),
    isLoading: this.store.select(selectIsLoading),
    error: this.store.select(selectError),
    feed: this.store.select(selectFeedData),
  })

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(feedActions.getFeed({url: this.apiUrl}))

    this.data$.subscribe(pipe((el) => {
      console.log(el.feed?.feed);
      
    }))
  }
}
