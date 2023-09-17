import {CommonModule} from '@angular/common'
import {Component} from '@angular/core'
import {Store} from '@ngrx/store'
import {combineLatest} from 'rxjs'
import {LoginComponent} from 'src/app/user/components/login/login.component'
import {selectCurrentUser} from 'src/app/user/store/reducers'

@Component({
  selector: 'mc-rightbar',
  templateUrl: './rightBar.component.html',
  standalone: true,
  imports: [CommonModule, LoginComponent],
})
export class RightBarComponent {
  data$ = combineLatest({
    currentUser: this.store.select(selectCurrentUser),
  })

  constructor(private store: Store) {}
}
