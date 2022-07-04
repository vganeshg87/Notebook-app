import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MaterialModule} from '../app/material.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotebookComponent } from './pages/notebook/notebook.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    NotebookComponent,
    MainLayoutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
