import { Component } from "@angular/core";
import { Page } from "ui/page";
import { ListView } from "ui/list-view";

@Component({
  selector: "my-app",
  templateUrl: "app.component.html"
})
export class AppComponent {
  public items: Array<any>;

  constructor(private page: Page) {
      this.items = new Array<any>();
      for (let i = 0; i < 5; i++) {
          this.items.push({data: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."});
      }
  }

  toggle(event) {
    if (event.object.textWrap) {
      event.object.textWrap = false;
    } else {
      event.object.textWrap = true;
    }
  }
}
