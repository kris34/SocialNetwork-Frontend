import {CommonModule} from '@angular/common'
import {Component} from '@angular/core'
import { RouterLink } from '@angular/router'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import {faInbox, faUserGroup} from '@fortawesome/free-solid-svg-icons'
import {Store} from '@ngrx/store'
import {combineLatest} from 'rxjs'
import {LoginComponent} from 'src/app/user/components/login/login.component'
import {selectCurrentUser} from 'src/app/user/store/reducers'


@Component({
  selector: 'mc-rightbar',
  templateUrl: './rightBar.component.html',
  standalone: true,
  imports: [CommonModule, LoginComponent, FontAwesomeModule, RouterLink],
})
export class RightBarComponent {
  friendsIcon = faUserGroup
  inboxIcon = faInbox

  data$ = combineLatest({
    currentUser: this.store.select(selectCurrentUser),
  })

  constructor(private store: Store) {}
}
