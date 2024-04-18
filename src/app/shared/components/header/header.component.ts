import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  //This is an output property it is used to send data from child to parent component. When the user clicks on the toggle button, it will emit the event to the parent component.
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  //This constructor is used to initialize the component, and it is called before the ngOnInit() lifecycle hook. When the component is created, it will initialize the component.
  constructor() { }

  //This lifecycle hook is called after Angular has initialized all data-bound properties of a directive. Its purpose is to perform any initialization work that is required for the component, and it is called after the constructor. When the component is initialized, it will call the ngOnInit() lifecycle hook.
  ngOnInit() {
  }
  // This method is used to emit the event to the parent component. When the user clicks on the toggle button, it will emit the event to the parent component. It will toggle the sidebar.
  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }

}
