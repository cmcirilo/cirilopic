import { NgModule } from '@angular/core';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'user/cirilo', component: PhotoListComponent },
  { path: 'user/add', component: PhotoFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
