import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PbQuoteComponent } from './pb-quote.component';

describe('PbQuoteComponent', () => {
  let component: PbQuoteComponent;
  let fixture: ComponentFixture<PbQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PbQuoteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PbQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
