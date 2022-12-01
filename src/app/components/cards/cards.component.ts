import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit{
  // default = "placeholder";
  // btnDisabled = true;

  // px = 10;

  imageHidden = "hidden";

  label = "";

  image_src = "";
  image_name = "";
  this_img = "";

  image = new Map();


  constructor() {}

  ngOnInit(): void {
      
  }

  onClick(img_name: string, img_src: string) 
  {
    this.image.set(img_name, img_src);
    this.label = 'Image "'+  img_name + '" added successfully.';
    console.log(this.label);
  }

  displayImage(img_info: string) 
  {
    if(this.image.has(img_info))
    {
      this.this_img = this.image.get(img_info);
      
    }
    else
    {
      this.this_img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbCyusovfE45AJ-91ouARO_KjR0C5fpSKcLVJeW6ji&s";
    }

    this.imageHidden = "";
  }

  // onClick(){
  //   console.log("Click Event");
  // }


  // desc()
  // {
  //   this.px--;
  // }

  // inc()
  // {
  //   this.px++;
  // }

  // ClickIt(phone: string)
  // {
  //     console.log(phone);
  // }
}
