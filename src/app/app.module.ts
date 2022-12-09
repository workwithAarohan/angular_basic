import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MaterialModule } from './modules/material/material.module';
import { SpecialDirective } from './directives/special.directive';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';

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
