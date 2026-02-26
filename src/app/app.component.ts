import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./component/nav-bar/nav-bar.component";
import { FooterComponent } from './component/footer/footer.component';
import { MyWorkComponent } from './component/my-work/my-work.component';
import { ContactMeComponent } from './component/contact-me/contact-me.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, FooterComponent, RouterModule, MyWorkComponent, ContactMeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
