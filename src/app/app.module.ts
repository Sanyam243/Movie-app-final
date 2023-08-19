import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './MyComponents/todos/todos.component';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { ListCharactersComponent } from './list-characters/list-characters.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateComponent } from './update/update.component'; 
import { DiagramModule } from '@syncfusion/ej2-angular-diagrams';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    CreateCharacterComponent,
    ListCharactersComponent,
    HomeComponent,
    UpdateComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    DiagramModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
