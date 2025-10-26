import { CanActivateFn, Router } from '@angular/router';
import { ProductService } from './product.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const productService = inject(ProductService);
  const router =inject(Router);
  
  if(!productService.isLogin){
    return true;

  } else{
    router.navigate(['/login']);
    return false;
  }
  
};
