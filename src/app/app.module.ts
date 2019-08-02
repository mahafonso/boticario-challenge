// Application Angular Packages
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { NgxMaskModule } from 'ngx-mask';
import { RouterModule } from '@angular/router';

// Application Config
import { AppConfigModule } from './app-config/app-config.module';

// Application Routes
import { AppRoutingModule } from './app-routing.module';

// Application Services
import { UtilsService } from './services/utils.service';

// Application Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

// Application Modules

// Angular Internationalization
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
registerLocaleData(ptBr);

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent
    ],
    imports: [
        AppConfigModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        LazyLoadImageModule,
        NgbModule.forRoot(),
        NgxMaskModule.forRoot({
            specialCharacters: [ '(', ')', '\-', '\.', ' ', '+55 ' ],
            dropSpecialCharacters: false
        })
    ],
    providers: [
        UtilsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
