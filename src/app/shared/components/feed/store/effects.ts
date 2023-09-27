import {inject} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {FeedService} from '../services/feed.service'
import {catchError, map, of, switchMap} from 'rxjs'
import {feedActions} from './actions'
import {getFeedResponseInterface} from '../types/getFeedResponse.interace'

export const getFeedEffect = createEffect(
  (actions$ = inject(Actions), feedService = inject(FeedService)) => {
    return actions$.pipe(
      ofType(feedActions.getFeed),
      switchMap(({url}) => {
        return feedService.getFeed(url).pipe(
          map((feed: getFeedResponseInterface) => {
            return feedActions.getFeedSuccess({feed})
          }),
          catchError((err) => {
            console.log(err)

            return of(feedActions.getFeedFailure())
          })
        )
      })
    )
  },
  {functional: true}
)
