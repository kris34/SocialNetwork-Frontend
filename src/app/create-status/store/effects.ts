import {inject} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {StatusService} from '../service/create-status.service'
import {createStatusActions} from './actions'
import {catchError, map, of, switchMap, tap} from 'rxjs'
import {StatusInterface} from 'src/app/shared/types/status.interface'
import {HttpErrorResponse} from '@angular/common/http'
import {Router} from '@angular/router'

export const createStatusEffect = createEffect(
  (actions$ = inject(Actions), createStatusService = inject(StatusService)) => {
    return actions$.pipe(
      ofType(createStatusActions.createStatus),
      switchMap(({request}) => {
        return createStatusService.createStatus(request).pipe(
          map((status: StatusInterface) => {
                        
            return createStatusActions.createStatusSuccess({status})
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              createStatusActions.createStatusFailure({
                errors: errorResponse.error.errors,
              })
            )
          })
        )
      })
    )
  },
  {functional: true}
)

export const redirectAfterCreateEffect = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) => {
    return actions$.pipe(
      ofType(createStatusActions.createStatusSuccess),
      tap(({status}) => {
        router.navigate(['/'])
      })
    )
  },
  {functional: true, dispatch: false}
)
