import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';

import { environment } from '../../environments/environment';

export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export class AppConfig {

}

export const APP_DI_CONFIG: AppConfig = {

};

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [],
    providers: [{
        provide: APP_CONFIG,
        useValue: APP_DI_CONFIG
    }]
})
export class AppConfigModule { }
