import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Cmp01DataBindingComponent } from './cmp01-data-binding/cmp01-data-binding.component';
import { FormsModule } from '@angular/forms';
import { Cmp02InputYOutputComponent } from './cmp02-input-y-output/cmp02-input-y-output.component';
import { SugusComponent } from './cmp02-input-y-output/sugus/sugus.component';
import { Cmp03ReferenciasComponent } from './cmp03-referencias/cmp03-referencias.component';

@NgModule({
  declarations: [
    AppComponent,
    Cmp01DataBindingComponent,
    Cmp02InputYOutputComponent,
    SugusComponent,
    Cmp03ReferenciasComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }