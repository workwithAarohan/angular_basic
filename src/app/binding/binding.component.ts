import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  
  text_label = "";
  reset = "";
  user_name = "";

  onClick(username: string)
  {
    this.text_label = "Username: " + username;
    this.reset = "";
    this.user_name = "";
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
