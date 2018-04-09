import { ContactListService } from './../services/contact-list/contact-list.service';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { FileChooser } from '@ionic-native/file-chooser';
import { File } from '@ionic-native/file';

import { FIREBASE_CONFIG } from './firebase.credentials';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { MyApp } from './app.component';
import { ToastService } from '../services/toast/toast.service';

@NgModule({
  declarations: [
    MyApp,
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    
  ],
  providers: [
    StatusBar,
    SplashScreen, FileChooser, File,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ContactListService,
    ToastService
  ]
})
export class AppModule {}
