import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { DetalleComponent } from './detalle/detalle.component';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';
import { FilterUsuariosPipe } from './pipes/filter-usuarios.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DetalleComponent,
    ListarUsuariosComponent,
    FilterUsuariosPipe,
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
