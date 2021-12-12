import {
  animate,
  group,
  style,
  transition,
  trigger,
  query,
} from '@angular/animations';

const baseStyles = style({
  // display: 'block',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
});

const TRANSITION_DELAY = 3000;

// export const ROUTE_SLIDE_TOP_STATE_TRIGGER = trigger('routeSlideTopState', [
//   transition(':enter', [
//     style({
//       opacity: 0,
//     }),
//     animate(TRANSITION_DELAY)
//   ]),
//   transition(':leave', animate(TRANSITION_DELAY, style({
//       opacity: 50,
//     })))
// ]);

export const ROUTE_SLIDE_TOP_STATE_TRIGGER = trigger('routeSlideTopState', [
  transition(':increment', [
    style({
      position: 'relative',
      overflow: 'hidden',
    }),

    query(':enter, :leave', [baseStyles], { optional: true }),

    // query(':enter', [
    //   style({ opacity: 0 })
    // ], { optional: true }),

    group([
      query(
        ':leave',
        [
          animate(
            '200ms ease-in',
            style({
              opacity: 1,
              transform: 'translateY(-100%)',
            })
          ),
        ],
        { optional: true }
      ),

      query(
        ':enter',
        [
          style({
            transform: 'translateY(100%)',
            opacity: 1,
          }),
          animate(
            '250ms 120ms ease-out',
            style({
              opacity: 1,
              transform: 'translateY(0)',
            })
          ),
        ],
        { optional: true }
      ),
    ]),
  ]),

  transition(':decrement', [
    style({
      position: 'relative',
      overflow: 'hidden',
    }),

    query(':enter, :leave', [baseStyles], { optional: true }),

    // query(':enter', [
    //   style({ opacity: 0 })
    // ], { optional: true }),

    group([
      query(
        ':leave',
        [
          animate(
            '200ms ease-in',
            style({
              opacity: 1,
              transform: 'translateY(100%)',
            })
          ),
        ],
        { optional: true }
      ),

      query(
        ':enter',
        [
          style({
            transform: 'translateY(-100%)',
            opacity: 1,
          }),
          animate(
            '250ms 120ms ease-out',
            style({
              opacity: 1,
              transform: 'translateY(0)',
            })
          ),
        ],
        { optional: true }
      ),
    ]),
  ]),

  transition('* => secondary', [
    style({
      position: 'relative',
      // overflow: 'hidden'
    }),

    query(':enter, :leave', [baseStyles], { optional: true }),

    group([
      query(
        ':leave',
        [
          animate(
            '200ms ease-in',
            style({
              opacity: 1,
              transform: 'scale(0.8)',
            })
          ),
        ],
        { optional: true }
      ),

      query(
        ':enter',
        [
          style({
            transform: 'scale(1.2)',
            opacity: 1,
          }),
          animate(
            '250ms 120ms ease-out',
            style({
              opacity: 1,
              transform: 'scale(1)',
            })
          ),
        ],
        { optional: true }
      ),
    ]),
  ]),

  transition('secondary => *', [
    style({
      position: 'relative',
      // overflow: 'hidden'
    }),

    query(':enter, :leave', [baseStyles], { optional: true }),

    group([
      query(
        ':leave',
        [
          animate(
            '200ms ease-in',
            style({
              opacity: 0,
              transform: 'scale(1.25)',
            })
          ),
        ],
        { optional: true }
      ),

      query(
        ':enter',
        [
          style({
            transform: 'scale(0.8)',
            opacity: 0,
          }),
          animate(
            '250ms 120ms ease-out',
            style({
              opacity: 1,
              transform: 'scale(1)',
            })
          ),
        ],
        { optional: true }
      ),
    ]),
  ]),
]);
