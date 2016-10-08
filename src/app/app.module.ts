import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {StocksComponent} from './stocks.component';
import {HighlightDirective} from './highlight.directive';
import {StockService} from './stock.service';
import { StockDirectiveDirective } from './stock-directive.directive';
import { DateFormatterPipe } from './date-formatter.pipe';
import {routing} from './app.routing';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './dashboard/dashboard.component';
import {CurrencyService} from './currency.service';
import {BondsDirective} from './bonds.directive';

@NgModule({
  declarations: [
    AppComponent, StocksComponent, HighlightDirective, StockDirectiveDirective, 
    DateFormatterPipe, DashboardComponent, BondsDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    NgbModule
  ],
  providers: [StockService, CurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
