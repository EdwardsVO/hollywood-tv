import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritePagesComponent } from './favorite-pages.component';

describe('FavoritePagesComponent', () => {
  let component: FavoritePagesComponent;
  let fixture: ComponentFixture<FavoritePagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritePagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritePagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
