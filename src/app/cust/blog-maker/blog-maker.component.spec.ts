import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogMakerComponent } from './blog-maker.component';

describe('BlogMakerComponent', () => {
  let component: BlogMakerComponent;
  let fixture: ComponentFixture<BlogMakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogMakerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
