import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RescompteRoutingModule } from './rescompte-routing.module';
import { RescompteComponent } from './rescompte.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [RescompteComponent],
  imports: [CommonModule, RescompteRoutingModule, CommonModule, FormsModule],
})
export class RescompteModule {}
