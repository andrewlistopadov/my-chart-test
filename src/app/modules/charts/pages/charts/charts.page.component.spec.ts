import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsPageComponent } from './charts.page.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ChartsService } from '../../services/charts.service';

describe('ChartsComponent', () => {
  let component: ChartsPageComponent;
  let fixture: ComponentFixture<ChartsPageComponent>;

  const ChartsServiceSpyObj = jasmine.createSpyObj('ChartsService', {
    'getSunnyDaysForSPb': Promise.resolve([]),
    'getSunnyDaysForMoscow': Promise.resolve([]),
    'getSunnyDaysForSochi': Promise.resolve([]),
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: ChartsService, useValue: ChartsServiceSpyObj }],
      declarations: [ChartsPageComponent],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(async () => {
    fixture = TestBed.createComponent(ChartsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
