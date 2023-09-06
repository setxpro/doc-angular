import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent {

  name = 'Patrick Anjos'
  role = 'Software Engineer'
  avatar = 'https://github.com/setxpro.png'

  show:boolean = false

  toggleMenu() {
    this.show = !this.show
  }

}
