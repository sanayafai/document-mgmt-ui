// app.routes.ts
import { Routes } from '@angular/router';
import { DocumentListComponent } from './components/document-list/document-list.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  { path: '', component: DocumentListComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/login' },
];
