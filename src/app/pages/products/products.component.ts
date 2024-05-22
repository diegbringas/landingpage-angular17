import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { Products } from '../../models/products.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'] // Corrected typo
})
export class ProductsComponent implements OnInit {
 
  productList: Products[] = []
  private _apiService = inject(ApiService);
  private _router = inject(Router);


  ngOnInit(): void {
    this._apiService.getProducts().subscribe((data: Products[]) => {
      console.log(data)
      this.productList = data;
    }
  );
  }

  navigate(id:number): void{
    this._router.navigate(['/products', id]);
  }
}
