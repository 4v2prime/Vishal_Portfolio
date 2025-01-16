import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { FooterComponent } from "./footer/footer.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { ResumeComponent } from "./resume/resume.component";
import { ServiceComponent } from "./service/service.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, AboutComponent, ContactComponent, FooterComponent, PortfolioComponent, ResumeComponent, ServiceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Vishal_Portfolio';
}
