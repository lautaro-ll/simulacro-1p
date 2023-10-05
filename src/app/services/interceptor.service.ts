import { Injectable } from '@angular/core';
import {
  Router,
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd,
  NavigationCancel,
  NavigationError
} from '@angular/router'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  private showOverlay = new BehaviorSubject(false);
  public currentOverlayState = this.showOverlay.asObservable();
  updateOverlayState(state: boolean) {
    this.showOverlay.next(state)
  }

  constructor(private router: Router) {

    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event)
    })
  }
  
  // Shows and hides the loading spinner during RouterEvent changes
  navigationInterceptor(event: RouterEvent): void {
    // if (event instanceof NavigationStart) {
    //   this.updateOverlayState(true);
    // }
    // if (event instanceof NavigationEnd) {
    //   this.updateOverlayState(false);
    // }

    // // Set loading state to false in both of the below events to hide the spinner in case a request fails
    // if (event instanceof NavigationCancel) {
    //   this.updateOverlayState(false);
    // }
    // if (event instanceof NavigationError) {
    //   this.updateOverlayState(false);
    // }
  }}
