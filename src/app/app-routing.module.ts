import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './layouts/modules/dashboard/dashboard.component'
import { PostsComponent } from './layouts/modules/posts/posts.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,

  children: [{
    path: '',
    component: DashboardComponent
  }, {
    path: 'posts',
    component: PostsComponent

  }]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
