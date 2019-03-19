import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatMagicSearchComponent } from './mat-magic-search.component';

describe('MatMagicSearchComponent', () => {
  let component: MatMagicSearchComponent;
  let fixture: ComponentFixture<MatMagicSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatMagicSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatMagicSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
