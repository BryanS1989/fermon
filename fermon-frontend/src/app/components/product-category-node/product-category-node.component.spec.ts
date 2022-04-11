import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCategoryNodeComponent } from './product-category-node.component';

describe('ProductCategoryNodeComponent', () => {
  let component: ProductCategoryNodeComponent;
  let fixture: ComponentFixture<ProductCategoryNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCategoryNodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCategoryNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
