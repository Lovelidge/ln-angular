import { Injectable } from '@angular/core';
import { Library, Guid } from '@lernender/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CdkMessageService {
  private _bus: Subject<any> = new Subject<any>();

  private _uid: string;

  constructor() {
    this._uid = Guid.CHAR();
  }
  /**
   * Dispat
   * ch()
   */
  public dispatch(message: any) {
    if (Library.isDefined(message)) {
      this._bus.next(message);
    }
  }
  /**
   * message()
   */
  public message(): Observable<any> {
    return this._bus.asObservable();
  }
}
