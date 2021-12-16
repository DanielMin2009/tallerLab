import {
  Component,
  ElementRef, Renderer2,
  ViewChild
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fromEvent, Observer } from 'rxjs';
import { ROUTE_SLIDE_TOP_STATE_TRIGGER } from '../../shared/animations/route-animations';
import { OnInit } from '@angular/core';

@Component({
  selector: 'lab-public-shell',
  templateUrl: './public-shell.component.html',
  animations: [ROUTE_SLIDE_TOP_STATE_TRIGGER],
})
export class LabPublicShellComponent implements OnInit {
  @ViewChild('publicShell', { static: true })
  publicShellRef: ElementRef<HTMLInputElement>;

  /* dy = new WheelEvent("syntheticWheel", {"deltaY": 0, "deltaMode": 0}); */

  constructor(private renderer: Renderer2) {}

  /* (e: number, options: WheelEvent ) */
  ngOnInit(): void {
    const wheelMovement$ = fromEvent(this.publicShellRef.nativeElement, 'wheel').subscribe(
      (e: Observer<WheelEvent> | any ) => {
        // object property
        const movement = e['wheelDeltaY'] > 0 ? 'UP' : 'DOWN';
        console.log(`movement: ${movement}`);
      }
    );

    const touchMove$ = fromEvent(this.publicShellRef.nativeElement, 'touchMove').subscribe(
      (e: any) => {
        const movement = e['touchDeltaY'] > 0 ? 'UP' : 'DOWN';
        console.log(`movement: ${movement}`);
      }
    );
  }

  goToView(outlet: RouterOutlet) {
    if (outlet.isActivated) {
      const menuItem = outlet.activatedRouteData['menuItem'];
      if (!menuItem) return 'secondary';
      return menuItem;
    }
  }

}


/* 

import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/takeUntil';

export class CanvasInteractionManager {

    private destroy$ = new Subject<void>();

    constructor(component: CanvasComponent) {
        this._element = component.nativeElement;
        ...
    }

    setupEvents() {
        let wheel$ = Observable.fromEvent(this._element, 'wheel')
            .takeUntil(this.destroy$)
            .do((event: WheelEvent) => {
                event.preventDefault();
            })
            .share();

        wheel$
            .filter((event: WheelEvent) => !event.shiftKey && !event.ctrlKey)
            .subscribe((event: WheelEvent) => this.moveY(event.deltaY));
        wheel$
            .filter((event: WheelEvent) => event.shiftKey && !event.ctrlKey)
            .subscribe((event: WheelEvent) => this.moveX(event.deltaY));
        wheel$
            .filter((event: WheelEvent) => event.ctrlKey)
            .subscribe((event: WheelEvent) => this.zoom(event.clientX, event.clientY, event.deltaY < 0));

        let mousedown$ = Observable.fromEvent(this._element, 'mousedown');
        let mousemove$ = Observable.fromEvent(document, 'mousemove');
        let mouseup$ = Observable.fromEvent(document, 'mouseup');

        let mousedrag$ = mousedown$.switchMap((event: MouseEvent) => {
            let prevX = event.clientX;
            let prevY = event.clientY;

            return mousemove$
                .map((event: MouseEvent) => {
                    event.preventDefault();

                    let delta = {
                        dx: event.clientX - prevX,
                        dy: event.clientY - prevY
                    };
                    prevX = event.clientX;
                    prevY = event.clientY;

                    return delta;
                })
                .takeUntil(mouseup$);
        }).takeUntil(this.destroy$);

        mousedrag$.subscribe((delta: { dx, dy }) => {
            if (delta.dx === 0 && delta.dy === 0) {
                return;
            }

            this.moveX(delta.dx);
            this.moveY(delta.dy);
        });
    }

    destroy() {
        this.destroy$.next();
    }

    private moveX(dx: number) { ... }

    private moveY(dy: number) { ... }

    private zoom(x: number, y: number, isZoomIn: boolean) { ... }
}
 */