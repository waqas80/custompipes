import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RemovewhitespacesPipe } from './custompipes/removewhitespaces.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RemovewhitespacesPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
