import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit{

  sideBarOpen = true;

    //This constructor is used to initialize the component, and it is called before the ngOnInit() lifecycle hook.
    constructor() { }

    //This lifecycle hook is called after Angular has initialized all data-bound properties of a directive. Its purpose is to perform any initialization work that is required for the component.
    ngOnInit() {
    }
    // This method is used to toggle the sidebar. When the user clicks on the toggle button, it will toggle the sidebar.
    sideBarToggler() {
      this.sideBarOpen = !this.sideBarOpen;
    }

}
