import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SomethingModalComponent } from './something-modal/something-modal.component';



@NgModule({
  declarations: [
    SomethingModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SomethingModalComponent,
  ],
  entryComponents: [
    SomethingModalComponent
  ]
})
export class SomethingModule { }
