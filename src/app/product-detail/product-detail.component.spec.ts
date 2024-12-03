import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailComponent} from './product-detail.component';
import { ProductsComponent } from '../products/products.component';

describe('ClientDetailComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
