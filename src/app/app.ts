import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CommonModule} from '@angular/common';
import { HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {
  // Signal for the application title
  protected readonly title = signal('Document Management UI');
}
