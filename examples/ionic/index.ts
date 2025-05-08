import 'zone.js';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { BrowserModule } from '@angular/platform-browser'
import { IonicModule, Platform } from '@ionic/angular'
import { Dialogs } from '@awesome-cordova-plugins/dialogs/ngx'
import { Camera } from '@awesome-cordova-plugins/camera/ngx'
import { Main } from './src/main'
import { NgModule } from '@angular/core'

@NgModule({
    bootstrap: [Main],
    providers: [Platform, Dialogs, Camera],
    imports: [BrowserModule, IonicModule.forRoot()]
})
class MainModule { }

platformBrowserDynamic().bootstrapModule(MainModule)
