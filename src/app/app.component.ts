import {Component, OnInit} from '@angular/core'
import {RouterOutlet} from '@angular/router'
import {LeftBarComponent} from './shared/components/leftBar/leftBar.component'
import {Store} from '@ngrx/store'
import {authActions} from './user/store/actions'
import {RightBarComponent} from './shared/components/rightBar.ts/rightBar.component'
import {FeedComponent} from './shared/components/feed/feed.component'
import {MainPageComponent} from './main-page/mainpage.component'
import {feedActions} from './shared/components/feed/store/actions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    RouterOutlet,
    LeftBarComponent,
    RightBarComponent,
    FeedComponent,
    MainPageComponent,
  ],
})
export class AppComponent implements OnInit {
  apiUrl: string = '/user/feed'
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(authActions.getCurrentUser())
  }
  title = 'finances'
}
