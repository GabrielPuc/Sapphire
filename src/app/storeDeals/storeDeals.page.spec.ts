import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StoreDeals } from './storeDeals.page';

describe('StoreDeals', () => {
  let component: StoreDeals;
  let fixture: ComponentFixture<StoreDeals>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StoreDeals],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StoreDeals);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
