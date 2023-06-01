import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [NewsletterComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    NewsletterComponent
  ]
})
export class SharedModule { }
