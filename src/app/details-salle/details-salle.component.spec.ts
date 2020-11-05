import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsSalleComponent } from './details-salle.component';

describe('DetailsSalleComponent', () => {
  let component: DetailsSalleComponent;
  let fixture: ComponentFixture<DetailsSalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsSalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsSalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
