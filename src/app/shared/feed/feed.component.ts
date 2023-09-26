import {CommonModule} from '@angular/common'
import {Component} from '@angular/core'
import {LoginComponent} from 'src/app/user/components/login/login.component'
import {LeftBarComponent} from '../components/leftBar/leftBar.component'
import {RightBarComponent} from '../components/rightBar.ts/rightBar.component'
import {combineLatest} from 'rxjs'
import {Store} from '@ngrx/store'
import {selectCurrentUser} from 'src/app/user/store/reducers'
import {RouterOutlet} from '@angular/router'

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
export class FeedComponent {
  data$ = combineLatest({
    currentUser: this.store.select(selectCurrentUser),
  })

  constructor(private store: Store) {}
}
