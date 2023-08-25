import {createAction, createActionGroup, emptyProps, props} from '@ngrx/store'
import {RegisterRequestInterface} from '../types/RegisterRequestInterface'
import {CurrentUserInterface} from 'src/app/shared/types/currentUserInterface'

export const authActions = createActionGroup({
  source: 'auth',
  events: {
    Register: props<{request: RegisterRequestInterface}>(),
    'Register Success': props<{currentUser: CurrentUserInterface}>(),
    'Register Failure': emptyProps(),
  },
})

/* export const register = createAction(
  '[User] Register',
  props<{request: RegisterRequestInterface}>()
)
 */