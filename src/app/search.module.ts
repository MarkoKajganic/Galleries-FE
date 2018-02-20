import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { SharedModule } from './shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    SearchComponent,
    SearchPageComponent
  ],
  exports: [
    SearchComponent,
    SearchPageComponent
  ]
})
export class SearchModule { }
