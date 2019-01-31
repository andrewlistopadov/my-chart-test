import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsPageComponent } from './charts.page.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ChartsService } from '../../services/charts.service';
import { createSpyObj } from 'jest-createspyobj';

describe('ChartsComponent', () => {
  let component: ChartsPageComponent;
  let fixture: ComponentFixture<ChartsPageComponent>;

  const ChartsServiceSpyObj = createSpyObj(ChartsService);
  ChartsServiceSpyObj.getSunnyDaysForMoscow.mockReturnValue(Promise.resolve([]));
  ChartsServiceSpyObj.getSunnyDaysForSPb.mockReturnValue(Promise.resolve([]));
  ChartsServiceSpyObj.getSunnyDaysForSochi.mockReturnValue(Promise.resolve([]));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ChartsPageComponent],
      providers: [{ provide: ChartsService, useValue: ChartsServiceSpyObj }],
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
