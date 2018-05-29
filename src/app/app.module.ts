import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppComponent } from './app.component';
import { InputsComponent } from './inputs/inputs.component';
import { CounterComponent } from './counter/counter.component';
import { TotalComponent } from './total/total.component';


@NgModule({
  declarations: [
    AppComponent,
    InputsComponent,
    CounterComponent,
    TotalComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
