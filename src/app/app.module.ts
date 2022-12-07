import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './components/cards/cards.component';
import { MaterialModule } from './material/material.module';
import { SpecialDirective } from './directives/special.directive';
import { DataGridComponent } from './components/data-grid/data-grid.component';
import { HeaderComponent } from './components/header/header.component';
// import { CardsWrapperModule } from "./cards-wrapper.module";
// import { CardsWrapperComponent } from './forms/cards-wrapper/cards-wrapper.component';
// import { PeriodicTableComponent } from './forms/periodic-table/periodic-table.component';

@NgModule({
    declarations: [
        AppComponent,
        CardsComponent,
        SpecialDirective,
        DataGridComponent,
        HeaderComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
    ]
})
export class AppModule { }
