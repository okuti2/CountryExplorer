import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FavouriteScreenPage } from './favourite-screen.page';

describe('FavouriteScreenPage', () => {
  let component: FavouriteScreenPage;
  let fixture: ComponentFixture<FavouriteScreenPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteScreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
