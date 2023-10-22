import {inject} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {LikeStatusService} from '../services/likesStatus.service'
import {catchError, map, of, switchMap} from 'rxjs'
import {likeStatusActions} from './actions'
import {StatusInterface} from 'src/app/shared/types/status.interface'

export const likeStatusEffect = createEffect(
  (
    actions$ = inject(Actions),
    likeStatusService = inject(LikeStatusService)
  ) => {
    return actions$.pipe(
      ofType(likeStatusActions.likeStatus),
      switchMap(({isLiked, id}) => {
        const status$ = isLiked
          ? likeStatusService.dislikeStatus(id)
          : likeStatusService.likeStatus(id)
        return status$.pipe(
          map((status: StatusInterface) => {
            

            return likeStatusActions.likeStatusSuccess({status})
          }),
          catchError((err) => {
            console.log(err)

            return of(likeStatusActions.likeStatusFailure())
          })
        )
      })
    )
  },
  {functional: true}
)
