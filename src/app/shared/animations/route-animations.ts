import { 
    animate,
    group, 
    style, 
    transition, 
    trigger, 
    query } from "@angular/animations";

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
    transition('* => *', [
      query(
        ':enter, :leave',
        [
          style({
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
          }),
        ],
        { optional: true }
      ),

      query(
        ':enter',
        [
          style({}),
          animate(
            0,
            style({
              opacity: 0,
            })
          ),
        ],
        { optional: true }
      ),

      group([
        query(
          ':enter',
          [
            style({}),
            animate(
              TRANSITION_DELAY,
              style({
                opacity: 0,
                transform: 'translateY(-100vh)',
              })
            ),
          ],
          { optional: true }
        ),

        query(
          ':leave',
          [
            style({}),
            animate(
                TRANSITION_DELAY,
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
]);