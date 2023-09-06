import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Output() toggleMenu: EventEmitter<any> = new EventEmitter() // Generic
  @Input() show: boolean = false;

  handleClick() {
    this.show = !this.show
    this.toggleMenu.emit();
  }


}
