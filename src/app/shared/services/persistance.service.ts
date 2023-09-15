import {Injectable} from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class PersistanceService {
  set(key: string, data: unknown): void {
    try {
      localStorage.setItem(key, JSON.stringify(data))
    } catch (err) {
      console.log(err)
    }
  }

  get(key: string): unknown {
    try {
      const localStorageItem = localStorage.getItem(key)
     
      return localStorageItem ? JSON.parse(localStorageItem).accessToken : null
    } catch (err) {
      console.log(err)
      return null
    }
  }
}
