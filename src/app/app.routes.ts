import {Route} from '@angular/router'

export const appRoutes: Route[] = [
  {
    path: 'register',
    loadChildren: () =>
      import('src/app/user/auth.routes').then((m) => m.registerRoutes),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('src/app/user/auth.routes').then((m) => m.loginRoutes),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('src/app/user/auth.routes').then((m) => m.profileRoutes),
  },
  {
    path: '',
    loadChildren: () =>
      import('src/app/shared/shared.routes').then((m) => m.feedRoutes),
  },
]
