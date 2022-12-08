import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { CardsComponent } from './components/cards/cards.component';
import { MaterialModule } from './modules/material/material.module';
import { SpecialDirective } from './directives/special.directive';
// import { DataGridComponent } from './components/data-grid/data-grid.component';
import { HeaderComponent } from './components/header/header.component';
import { CardWrapperModule } from "./modules/card-wrapper/card-wrapper.module";
import { PeriodicTableModule } from './modules/periodic-table/periodic-table.module';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { DataGridItemComponent } from './components/data-grid/data-grid-item/data-grid-item.component';

@NgModule({
    declarations: [
        AppComponent,
        SpecialDirective,
        HeaderComponent,
        DataGridItemComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserAnimationsModule,
        MaterialModule,
        AppRoutingModule
    ]
})
export class AppModule { }
