import {HttpInterceptorFn} from '@angular/common/http'
import {Inject, inject} from '@angular/core'
import {PersistanceService} from 'src/app/shared/services/persistance.service'

export const authInterceptor: HttpInterceptorFn = (request, next) => {
  const persitanceService = inject(PersistanceService)
  const token = persitanceService.get('x-authorization')

  request = request.clone({
    setHeaders: {
      'x-authorization': token ? `${token}` : '',
    },
  })

  return next(request)
}
