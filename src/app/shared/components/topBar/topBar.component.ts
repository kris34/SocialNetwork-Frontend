import {CommonModule} from '@angular/common'
import {Component} from '@angular/core'
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'
import {Store} from '@ngrx/store'
import {combineLatest} from 'rxjs'
import {selectCurrentUser} from 'src/app/user/store/reducers'
import {faHome} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'mc-topbar',
  templateUrl: './topBar.component.html',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
})
export class TopBarComponent {
  homeIcon = faHome
  

  data$ = combineLatest({
    currentUser: this.store.select(selectCurrentUser),
  })

  constructor(private store: Store) {}
}
