import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { customValidator } from '../custom.validator';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  submitted: boolean = false;
  // @Output() productEmitter = new EventEmitter();
  addProduct: Product = {
    name: '',
    description: '',
    price: 0,
    img: '../../assets/images/iphone.jpg',
  };

  productForm: FormGroup;

  // constructor(private productService : ProductService ){
  //   this.productForm = new FormGroup({
  //     name: new FormControl('', [Validators.required]),
  //     description: new FormControl(''),
  //     price: new FormControl('', [Validators.required]),
  //   });
  // }

  constructor(private productService: ProductService , private fb: FormBuilder) {
    this.productForm = fb.group ({
      'name' : ['',[Validators.required,Validators.minLength(5),customValidator()]],
      'description' :[''],
      'price':['',[Validators.required]]
    })
  }

  // ngOnChanges(){

  // }

  // productservice = new ProductService;

  // constructor(private productService: ProductService) {}
  // onSubmit() {
  //   // this.productEmitter.emit(this.addProduct);

  //   this.productService.prods.push(this.addProduct);

  //   this.addProduct = {
  //     name: '',
  //     description: '',
  //     price: 0,
  //     img: '../../assets/images/iphone.jpg',
  //   };

  //  this.addProduct.name = "",
  //   this.addProduct.description = "",
  //   this.addProduct.price= 0,
  //   this.addProduct.img = "../../assets/images/iphone.jpg"

  // this.products.push(this.addProduct),

  // this.addProduct = {
  //   name : "",
  //   description : "",
  //   price: 0,
  //   img : "../../assets/images/iphone.jpg"
  // }

  // onSubmit(form:NgForm){
  onSubmit() {
    this.submitted = true;
    console.log(this.productForm.valid);

    if (this.productForm.valid) {
      this.productService
        .postData({
          ...this.productForm.value,
          img: '../../assets/images/iphone.jpg',
        })
        .subscribe({
          next: () => {
            this.productService.productSubject.next(true);
          },
        });
      this.submitted = false;
      this.productForm.reset();
    }
    else{
      this.productForm.markAllAsTouched();
    }
    

    //   if(form.valid){
    //     this.productService.postData({...form.value, img:'../../assets/images/iphone.jpg'}).subscribe({
    //       complete: ()=>{
    //         this.productService.productSubject.next(true);
    //       }
    //   });
    //   }

    // this.addProduct ={
    //   name:'',
    //   description:'',
    //   price:0,
    //   img:'../../assests/images/iphone.jpeg'
    // };
    //     this.submitted =false;
    //     form.reset();
  }
}