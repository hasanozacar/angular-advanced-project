import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { ProductService } from 'src/app/core/services/product.service';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Animasyonları desteklemek için import ediyoruz

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let productService: ProductService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MatSelectModule,
        FormsModule,
        BrowserAnimationsModule,
      ],
      declarations: [DashboardComponent],
      providers: [ProductService, Router],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    productService = TestBed.inject(ProductService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch products on init', () => {
    const productData = [
      { title: 'Product 1', category: "men's clothing", price: 100 },
      { title: 'Product 2', category: 'electronics', price: 200 },
    ];

    spyOn(productService, 'getProducts').and.returnValue(of(productData));

    component.ngOnInit();
    expect(component.allProducts).toEqual(productData);
    expect(component.products).toEqual(productData);
  });

  it('should filter products by category', () => {
    const productData = [
      { title: 'Product 1', category: "men's clothing", price: 100 },
      { title: 'Product 2', category: 'electronics', price: 200 },
    ];

    component.allProducts = productData;
    component.selectedCategory = "men's clothing";

    component.filterProducts();

    expect(component.products.length).toBe(1);
    expect(component.products[0].category).toBe("men's clothing");
  });

  it('should filter products by price range (low)', () => {
    const productData = [
      { title: 'Product 1', category: "men's clothing", price: 100 },
      { title: 'Product 2', category: 'electronics', price: 200 },
    ];
    component.allProducts = productData;
    component.selectedPriceRange = 'low';

    component.filterProducts();

    expect(component.products.length).toBe(1);
    expect(component.products[0].price).toBeLessThan(200);
  });
  it('should filter products by price range (high)', () => {
    const productData = [
      { title: 'Product 1', category: "men's clothing", price: 100 },
      { title: 'Product 2', category: 'electronics', price: 200 },
    ];

    component.allProducts = productData;
    component.selectedPriceRange = 'high';

    component.filterProducts();

    expect(component.products.length).toBe(1);
    expect(component.products[0].price).toBeGreaterThan(100);
  });
});
