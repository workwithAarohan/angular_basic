import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MaterialModule } from './modules/material/material.module';
import { SpecialDirective } from './directives/special.directive';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';

@NgModule({
    declarations: [
        AppComponent,
        SpecialDirective,
        HeaderComponent,
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
