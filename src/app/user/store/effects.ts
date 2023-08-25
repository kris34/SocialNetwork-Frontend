import {inject} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {catchError, map, of, switchMap} from 'rxjs'
import {authActions} from './actions'
import { CurrentUserInterface } from 'src/app/shared/types/currentUserInterface'
import { UserService } from '../services/user.service'

export const registerEffect = createEffect(
  (actions$ = inject(Actions), authService = inject(UserService)) => {
    return actions$.pipe(
      ofType(authActions.register),
      switchMap(({request}) => {
        return authService.register(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            return authActions.registerSuccess({currentUser})
          }),
          catchError(() => {
            return of(authActions.registerFailure())
          })
        )
      })
    )
  },
  {functional: true}
)
