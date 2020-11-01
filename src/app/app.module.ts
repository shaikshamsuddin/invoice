import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { lazyRoutes } from './routes/app.routes';
import { AppComponent } from './app.component';
import  { NgHttpLoaderModule } from "ng-http-loader";
import { MaterialModule } from './material.module';
import { HeaderComponent } from './header/header.component';
 
@NgModule({
  declarations: [AppComponent,HeaderComponent],
  imports: [BrowserModule,MaterialModule, BrowserAnimationsModule, lazyRoutes,NgHttpLoaderModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
