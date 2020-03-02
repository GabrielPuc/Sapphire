import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DealsSearchPage } from './deals-search.page';

describe('DealsSearchPage', () => {
  let component: DealsSearchPage;
  let fixture: ComponentFixture<DealsSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DealsSearchPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DealsSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
