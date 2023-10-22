import {bootstrapApplication} from '@angular/platform-browser'
import {AppComponent} from './app/app.component'
import {provideRouter} from '@angular/router'
import {appRoutes} from './app/app.routes'
import {provideState, provideStore} from '@ngrx/store'
import {provideStoreDevtools} from '@ngrx/store-devtools'
import {isDevMode} from '@angular/core'
import {authFeatureKey, authReducer} from './app/user/store/reducers'
import {provideHttpClient, withInterceptors} from '@angular/common/http'
import {provideEffects} from '@ngrx/effects'
import {authInterceptor} from './app/user/services/authinterceptor'
import {
  FeedFeatureKey,
  feedReducer,
} from './app/shared/components/feed/store/reducers'
import {routerReducer, provideRouterStore} from '@ngrx/router-store'
import {metaReducers} from './app/user/store/metaReducers'
import * as statusEffects from './app/create-status/store/effects'
import * as authEffects from './app/user/store/effects'
import * as feedEffects from './app/shared/components/feed/store/effects'
import * as likeStatusEffects from './app/shared/components/feed/components/likeStatus/store/effects'
import {
  createStatusFeatureKey,
  createStatusReducer,
} from './app/create-status/store/reducers'
import { LikeStatusService } from './app/shared/components/feed/components/likeStatus/services/likesStatus.service'

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptors([authInterceptor])),
    provideRouter(appRoutes),
    provideStore({router: routerReducer}),
    provideRouterStore(),
    provideState(authFeatureKey, authReducer),
    provideState(FeedFeatureKey, feedReducer),
    provideState(createStatusFeatureKey, createStatusReducer),
    provideEffects(authEffects, statusEffects, feedEffects, likeStatusEffects),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: true,
      traceLimit: 75,
    }),
    LikeStatusService
  ],
})
