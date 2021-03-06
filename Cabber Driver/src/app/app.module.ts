import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { RequestPage } from '../pages/request/request';
import { AcceptriderPage } from '../pages/acceptrider/acceptrider';
import { AcceptPage } from '../pages/accept/accept';
import { RoderPage } from '../pages/roder/roder';
import { CancelridePage } from '../pages/cancelride/cancelride';
import { NevigatePage } from '../pages/nevigate/nevigate';
import { LocationPage } from '../pages/location/location';
import { FarePage } from '../pages/fare/fare';
import { RatingsPage } from '../pages/ratings/ratings';
import { EarningsPage } from '../pages/earnings/earnings';
import { ProfilePage } from '../pages/profile/profile';
import { HelpPage } from '../pages/help/help';
import { DocumentsPage } from '../pages/documents/documents';
import { SettingsPage } from '../pages/settings/settings';
import { MytripsPage } from '../pages/mytrips/mytrips';
import { SharePage } from '../pages/share/share';
import { MyprofilePage } from '../pages/myprofile/myprofile';
import { Geolocation } from '@ionic-native/geolocation';

import { AndroidPermissions } from '@ionic-native/android-permissions';
import { Globalization } from '@ionic-native/globalization';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { APP_CONFIG, BaseAppConfig } from "./app.config";

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    LoginPage,
    RequestPage,
    AcceptriderPage,
    RoderPage,
    CancelridePage,
    NevigatePage,
    LocationPage,
    FarePage,
    RatingsPage,
    EarningsPage,
    ProfilePage,
    HelpPage,
    DocumentsPage,
    SettingsPage,
    MytripsPage,
    SharePage,
    MyprofilePage,
    AcceptPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      // mode:'ios',
      platforms: {
        ios: {
          backButtonText: '',
          iconMode: 'ios',
          backButtonIcon:'md-arrow-back'
        }
      }
    }),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    LoginPage,
    RequestPage,
    AcceptriderPage,
    RoderPage,
    CancelridePage,
    NevigatePage,
    LocationPage,
    FarePage,
    RatingsPage,
    EarningsPage,
    ProfilePage,
    HelpPage,
    DocumentsPage,
    SettingsPage,
    MytripsPage,
    SharePage,
    MyprofilePage,
    AcceptPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
	  Geolocation,
    AndroidPermissions,Globalization,
    { provide: APP_CONFIG, useValue: BaseAppConfig },
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}