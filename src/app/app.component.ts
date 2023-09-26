import {Component, OnInit} from '@angular/core'
import {RouterOutlet} from '@angular/router'
import {LeftBarComponent} from './shared/components/leftBar/leftBar.component'
import {Store} from '@ngrx/store'
import {authActions} from './user/store/actions'
import {RightBarComponent} from './shared/components/rightBar.ts/rightBar.component'
import {FeedComponent} from './shared/feed/feed.component'
import { MainPageComponent } from './shared/components/main-page/mainpage.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [RouterOutlet, LeftBarComponent, RightBarComponent, FeedComponent, MainPageComponent],
})
export class AppComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(authActions.getCurrentUser())
  }
  title = 'finances'
}
