import { RemultModule } from '@remult/angular';
import { NgModule, ErrorHandler } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


import { UsersComponent } from './users/users.component';
import { AdminGuard } from './users/roles';
import { ShowDialogOnErrorErrorHandler } from './common/dialog';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthService } from './auth.service';
import { terms } from './terms';
import { DemoMotiEntityComponent } from './demo-moti-entity/demo-moti-entity.component';
import { DemoValidatorsComponent } from './demo-validators/demo-validators.component';
import { EntityRelationsComponent } from './entity-relations/entity-relations.component';

const defaultRoute = terms.home;
const routes: Routes = [
  { path: defaultRoute, component: HomeComponent },
  { path: "relations", component: EntityRelationsComponent },
  { path: "moti-entity", component: DemoMotiEntityComponent },
  { path: 'demo-validators', component: DemoValidatorsComponent },
  { path: terms.userAccounts, component: UsersComponent, canActivate: [AdminGuard] },
  { path: '**', redirectTo: '/' + defaultRoute, pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    RemultModule,
  JwtModule.forRoot({
    config: { tokenGetter: () => AuthService.fromStorage() }
  })],
  providers: [AdminGuard, { provide: ErrorHandler, useClass: ShowDialogOnErrorErrorHandler }],
  exports: [RouterModule]
})
export class AppRoutingModule { }

