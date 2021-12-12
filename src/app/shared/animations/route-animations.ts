import {
  animate,
  group,
  style,
  transition,
  trigger,
  query,
} from '@angular/animations';

const baseStyles = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
});

const easeInAnim = '200ms ease-in';
const easeOutAnim = '250ms 120ms ease-out';

const minorScale = 'scale(0.8)';
const originScale = 'scale(1)';
const higherScale = 'scale(1.25)';

export const ROUTE_SLIDE_TOP_STATE_TRIGGER = trigger('routeSlideTopState', [
  transition(':increment', [
    style({
      position: 'relative',
      overflow: 'hidden',
    }),

    query(':enter, :leave', [baseStyles], { optional: true }),

    group([
      query(
        ':leave',
        [
          animate(
            easeInAnim,
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
            easeOutAnim,
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

    group([
      query(
        ':leave',
        [
          animate(
            easeInAnim,
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
            easeOutAnim,
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
    }),

    query(':enter, :leave', [baseStyles], { optional: true }),

    group([
      query(
        ':leave',
        [
          animate(
            easeInAnim,
            style({
              opacity: 1,
              transform: minorScale,
            })
          ),
        ],
        { optional: true }
      ),

      query(
        ':enter',
        [
          style({
            transform: higherScale,
            opacity: 1,
          }),
          animate(
            easeOutAnim,
            style({
              opacity: 1,
              transform: originScale,
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
    }),

    query(':enter, :leave', [baseStyles], { optional: true }),

    group([
      query(
        ':leave',
        [
          animate(
            easeInAnim,
            style({
              opacity: 0,
              transform: higherScale,
            })
          ),
        ],
        { optional: true }
      ),

      query(
        ':enter',
        [
          style({
            transform: minorScale,
            opacity: 0,
          }),
          animate(
            easeOutAnim,
            style({
              opacity: 1,
              transform: originScale,
            })
          ),
        ],
        { optional: true }
      ),
    ]),
  ]),
]);
