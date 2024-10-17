import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RxjsOperatorsComponent } from "./rxjs-operators/rxjs-operators.component";
import { TemplateDriveReactiveFormsComponent } from "./template-drive-reactive-forms/template-drive-reactive-forms.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RxjsOperatorsComponent, TemplateDriveReactiveFormsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-demo';
}
