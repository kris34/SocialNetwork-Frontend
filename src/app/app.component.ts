import {Component, OnInit} from '@angular/core'
import {RouterOutlet} from '@angular/router'
import {TopBarComponent} from './shared/components/topBar/topBar.component'
import {Store} from '@ngrx/store'
import {authActions} from './user/store/actions'
import {getSession} from './shared/components/session/session'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [RouterOutlet, TopBarComponent],
})
export class AppComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
   /*  function getSession() {
      const session = localStorage.getItem('accessToken')

      return session ? JSON.parse(session) : null
    }

    console.log(getSession()) */

    this.store.dispatch(authActions.getCurrentUser())
  }
  title = 'finances'
}
