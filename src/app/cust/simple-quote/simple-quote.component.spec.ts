import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleQuoteComponent } from './simple-quote.component';

describe('SimpleQuoteComponent', () => {
  let component: SimpleQuoteComponent;
  let fixture: ComponentFixture<SimpleQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleQuoteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
