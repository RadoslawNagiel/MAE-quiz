import {
  trigger,
  transition,
  style,
  animate,
  query,
  group,
  animateChild,
} from '@angular/animations';

export const routeAnimations = trigger('routeAnimations', [
  transition('* <=> *', [
    style({ position: 'relative' }),
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          bottom: 0,
          width: '100%',
        }),
      ],
      { optional: true },
    ),
    query(':enter', [style({ top: '10%', opacity: 0 })], { optional: true }),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(
        ':leave',
        [animate('300ms ease-in', style({ top: '-10%', opacity: 0 }))],
        { optional: true },
      ),
      query(
        ':enter',
        [animate('300ms 200ms ease-out', style({ top: '0%', opacity: 1 }))],
        {
          optional: true,
        },
      ),
      query('@*', animateChild(), { optional: true }),
    ]),
  ]),
]);
