import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BlockResolverService } from './services/members/block.resolver';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
    resolve: { data: BlockResolverService },
  },
  { path: '', redirectTo: 'about', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
