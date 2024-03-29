import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GameDetailModalPage } from './pages/gameDetailModal/gameDetailModal.page';
import { CheapsharkProvider } from './providers/cheapshark';
import {RainbowStatusService} from './providers/rainbow-status-service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { FilterSearch } from './components/filter-search'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@NgModule({
  declarations: [AppComponent, GameDetailModalPage, FilterSearch],
  entryComponents: [GameDetailModalPage, FilterSearch],
  imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [
    InAppBrowser,
    StatusBar,
    SocialSharing,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    CheapsharkProvider,
    RainbowStatusService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
