import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../../models/products.model';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit{
   

    loading: boolean = true;
    public product?: Products;

    private _route = inject(ActivatedRoute);
    private _apiService = inject(ApiService)

    ngOnInit(): void {
      this._route.params.subscribe(params => {
        this._apiService.getProduct(params['id']).subscribe((data: Products) => {
          this.product = data;
          this.loading = false ;
        })
      })

    }

}
