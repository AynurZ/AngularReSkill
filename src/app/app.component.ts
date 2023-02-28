import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <header>
    <div class="header">
    <nav>
      <!-- <a routerLink="/dashboard">Dashboard</a>
        <a routerLink="/heroes">Heroes</a>-->
        <a routerLink="/product">Products</a>
        <a routerLink="/basket">Shopping Cart</a>
        <a routerLink="/basket" class="button-right">Items in Cart 2</a>
      </nav>
    </div>
    </header>
    <main class="content">
      <section class="details">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isButtonVisible = false;
}
