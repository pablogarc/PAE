import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { ErrorComponent } from './pages/notFound/error/error.component';
import { NoticiaDetailsComponent } from './pages/noticias/noticia-details/noticia-details.component';
import { NoticiasListComponent } from './pages/noticias/noticias-list/noticias-list.component';
import { MyUpperCasePipe } from './shared/pipes/my-upper-case.pipe';
import { NoticiaDetailsPageComponent } from './pages/noticias/noticia-details-page/noticia-details-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    NoticiasComponent,
    ErrorComponent,
    NoticiaDetailsComponent,
    NoticiasListComponent,
    MyUpperCasePipe,
    NoticiaDetailsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
