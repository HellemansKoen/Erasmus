import { Component, EnvironmentInjector, inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  public environmentInjector = inject(EnvironmentInjector);

  constructor() {}
}