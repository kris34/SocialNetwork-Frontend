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
]
