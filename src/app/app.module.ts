import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SpecialDirective } from './directives/special.directive';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { CardItemComponent } from './components/cards/card-item/card-item.component';

@NgModule({
    declarations: [
        AppComponent,
        SpecialDirective,
        HeaderComponent,
    ],
    providers: [AuthService],
    bootstrap: [AppComponent],
    imports: [
        BrowserAnimationsModule,
        MaterialModule,
        AppRoutingModule,
        HttpClientModule
    ]
})
export class AppModule { }
