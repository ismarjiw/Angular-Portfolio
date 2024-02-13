import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DarkmodeService {

  private _isDarkMode = new BehaviorSubject<boolean>(false);

  // Observable to subscribe to for changes in dark mode state
  isDarkMode$ = this._isDarkMode.asObservable();

  // Getter to retrieve the current value of isDarkMode
  get isDarkMode(): boolean {
    return this._isDarkMode.value;
  }

  // Toggle dark mode
  toggleDarkMode() {
    this._isDarkMode.next(!this._isDarkMode.value);
  }
}
