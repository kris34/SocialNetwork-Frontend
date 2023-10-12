import {CommonModule} from '@angular/common'
import {Component, OnInit} from '@angular/core'
import {LoginComponent} from 'src/app/user/components/login/login.component'
import {LeftBarComponent} from '../../../leftBar/leftBar.component'
import {RightBarComponent} from '../../../rightBar.ts/rightBar.component'
import {combineLatest, pipe} from 'rxjs'
import {Store} from '@ngrx/store'
import {selectCurrentUser} from 'src/app/user/store/reducers'
import {RouterOutlet} from '@angular/router'
import {feedActions} from '../../store/actions'
import {
  selectError,
  selectFeedData,
  selectIsLoading,
} from '../../store/reducers'
import {CreateStatusComponent} from 'src/app/create-status/components/create-status.component'
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import {StatusService} from 'src/app/create-status/service/create-status.service'
import {LikeStatusComponent} from '../likeStatus/likeStatus.component'

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
    CreateStatusComponent,
    FontAwesomeModule,
    LikeStatusComponent,
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

  constructor(private store: Store, private statusService: StatusService) {}

  ngOnInit(): void {
    this.fetchFeed()
    this.data$.subscribe(
      pipe((el) => {
        console.log(el.feed?.feed)
      })
    )
  }

  fetchFeed(): void {
    this.store.dispatch(feedActions.getFeed({url: this.apiUrl}))
  }
}
