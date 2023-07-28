import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterModule, Routes } from '@angular/router';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';


import {MatGridListModule} from '@angular/material/grid-list';

import {MatDividerModule} from '@angular/material/divider';
import { FeedComponent } from './feed/feed.component';

const routes: Routes = [
  {path: '', component: HomeComponent, title: ''},
  {path: 'home', component: HomeComponent, title: 'home'},
  {path: 'feed', component: HomeComponent, title: 'feed'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    RouterModule.forRoot(routes),
    MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule,
    MatGridListModule,
    MatDividerModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
