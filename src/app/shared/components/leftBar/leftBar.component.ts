import {CommonModule} from '@angular/common'
import {Component} from '@angular/core'
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import {Store} from '@ngrx/store'
import {combineLatest} from 'rxjs'
import {selectCurrentUser} from 'src/app/user/store/reducers'
import {faFloppyDisk, faHome, faRightFromBracket, faRss, faUser } from '@fortawesome/free-solid-svg-icons'
import { RegisterComponent } from 'src/app/user/components/register/register.component'
import { LoginComponent } from 'src/app/user/components/login/login.component'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'mc-leftbar',
  templateUrl: './leftBar.component.html',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, RegisterComponent, LoginComponent, RouterLink],
})
export class LeftBarComponent {
  homeIcon = faHome
  userIcon = faUser
  savedIcon = faFloppyDisk
  logoutIcon = faRightFromBracket

  data$ = combineLatest({
    currentUser: this.store.select(selectCurrentUser)
  })

  constructor(private store: Store) {}
}
