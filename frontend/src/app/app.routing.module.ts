import { NgModule } from '@angular/core';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { AuthGuard } from './core/auth/auth.guard';
import { PhotoDetailsComponent } from './photos/photo-details/photo-details.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule',
  },
  {
    path: 'user/:userName',
    component: PhotoListComponent,
    resolve: { photos: PhotoListResolver },
    data: {
      title: 'Timeline',
    },
  },
  {
    path: 'photo/add', component: PhotoFormComponent, canActivate: [AuthGuard], data: {
      title: 'Photo upload',
    },
  },
  {
    path: 'photo/:photoId', component: PhotoDetailsComponent, data: {
      title: 'Photo detail',
    },
  },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)], exports: [RouterModule],
})
export class AppRoutingModule {
}
