import { Component, NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { ListCharactersComponent } from './list-characters/list-characters.component';
import { HomeComponent } from './home/home.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {component:CreateCharacterComponent,path:'create'},
  {component:ListCharactersComponent,path:'list'},
  {component:HomeComponent,path:'home'},
  {component:UpdateComponent,path:'update/:id'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
