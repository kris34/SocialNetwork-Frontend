import {
  Action,
  ActionReducer,
  INIT,
  MetaReducer,
  ReducerManager,
} from '@ngrx/store'
import {authActions} from './actions'

export function logout(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state: any, action: any) => {
    if (action != null && action === authActions.logoutCurrentUser) {
      return reducer(null, action)
    }
    return reducer(state, action)
  }
}

export const metaReducers: MetaReducer[] = [logout]


