import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductsService } from '../Services/products.service';

@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css',
})
export class ProductdetailsComponent implements OnInit {
  productDetails: any;
  productId: any;
  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService
  ) {}
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      // console.log(params.get('id'));
      this.productId = params.get('id');
    });
    this.productsService.getProductDetails(this.productId).subscribe({
      next: (response) => {
        this.productDetails = response.data;
        console.log(this.productDetails);
      },
    });
  }
}
