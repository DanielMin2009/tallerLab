import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LabComponent } from './lab.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        LabComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(LabComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'tallerlab'`, () => {
    const fixture = TestBed.createComponent(LabComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('tallerlab');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(LabComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('tallerlab app is running!');
  });
});
