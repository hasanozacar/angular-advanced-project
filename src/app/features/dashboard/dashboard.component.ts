import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  allProducts: any[] = [];
  products: any[] = [];
  categories: string[] = [
    "men's clothing",
    'electronics',
    'jewelery',
    "women's clothing",
  ];
  selectedCategory: string = '';
  selectedPriceRange: string = '';

  constructor(private router: Router, private productService: ProductService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.productService.getProducts().subscribe(
      (data) => {
        this.allProducts = data;
        this.products = [...this.allProducts];
      },
      (error) => {
        console.error('Error fetching products', error);
      }
    );
  }

  goToUsers(): void {
    this.router.navigate(['/users']);
  }

  filterProducts(): void {
    console.log('Selected Category:', this.selectedCategory);
    console.log('Selected Price Range:', this.selectedPriceRange);

    let filteredProducts = [...this.allProducts];

    if (this.selectedCategory) {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === this.selectedCategory
      );
    }

    if (this.selectedPriceRange === 'low') {
      filteredProducts = filteredProducts.filter(
        (product) => product.price < 150
      );
    } else if (this.selectedPriceRange === 'high') {
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= 150
      );
    }

    this.products = filteredProducts;
  }
}
