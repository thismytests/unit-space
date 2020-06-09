import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GiphyComponent} from './giphy.component';
import {CommonModule} from '@angular/common';
import {ControlersModule} from '../components/controlers';
import {ContentModule} from '../components/content';
import {PaginatorModule} from '../components/paginator';
import {RouterTestingModule} from '@angular/router/testing';
import {GiphyService} from '../../../commons/api/giphy.service';
import {BehaviorSubject, Observable} from 'rxjs';

describe('GiphyComponent', () => {
  let component: GiphyComponent;
  let fixture: ComponentFixture<GiphyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        ControlersModule,
        ContentModule,
        PaginatorModule,
        RouterTestingModule
      ],
      providers: [
        {
          provide: GiphyService,
          useValue: {
            search: () => {
              return new BehaviorSubject({
                pagination: 1
              });
            }
          }
        }
      ],
      declarations: [GiphyComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiphyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
