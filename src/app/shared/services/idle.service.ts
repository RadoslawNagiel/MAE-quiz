import { inject, Injectable, NgZone, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class IdleService implements OnDestroy {
  private readonly router = inject(Router);
  private readonly ngZone = inject(NgZone);

  private timeout: any;
  private readonly TIMEOUT_DURATION = 5 * 60 * 1000;

  constructor() {
    this.startWatching();
  }

  ngOnDestroy() {
    clearTimeout(this.timeout);
  }

  private resetTimer() {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(
      () => this.redirectToHome(),
      this.TIMEOUT_DURATION,
    );
  }

  private redirectToHome() {
    this.ngZone.run(() => this.router.navigate(['']));
  }

  private startWatching() {
    this.resetTimer();
    window.addEventListener('mousemove', () => this.resetTimer());
    window.addEventListener('keydown', () => this.resetTimer());
    window.addEventListener('click', () => this.resetTimer());
  }
}
