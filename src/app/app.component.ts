import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SideMenuComponent} from './components/side-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SideMenuComponent],
  template: `
    <div style="display: flex; height: 100vh">
      <app-side-menu style="width: 250px;"></app-side-menu>
      <div style="flex: 1; padding: 16px;">
        <router-outlet />
      </div>
    </div>
  `
})
export class AppComponent {}
