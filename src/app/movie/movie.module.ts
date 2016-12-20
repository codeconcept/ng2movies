import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieComponent } from './movie.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ MovieComponent],
  declarations: [MovieComponent]
})
export class MovieModule { }
