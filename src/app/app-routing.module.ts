import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddapartmentComponent } from './addapartment/addapartment.component';
import { AddhomeComponent } from './addhome/addhome.component';
import { AddpropertyComponent } from './addproperty/addproperty.component';
import { AddstudioefficiencyComponent } from './addstudioefficiency/addstudioefficiency.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { AuthGuard } from './auth.guard';
import { CallbackComponent } from './components/callback/callback.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HomesComponent } from './homes/homes.component';
import { RentalapplicationComponent } from './rentalapplication/rentalapplication.component';
import { StudioefficiencyComponent } from './studioefficiency/studioefficency.component';


const routes: Routes = [
  {path: 'homepage', component: HomepageComponent }, 
  {path: 'contactpage', component: ContactpageComponent }, 
  {path: 'rentalapplication', component: RentalapplicationComponent }, 
  {path: 'studioefficency', component: StudioefficiencyComponent }, 
  {path: 'apartments', component: ApartmentsComponent }, 
  {path: 'homes', component: HomesComponent }, 
  {path: '', component: HomepageComponent },
  {path: 'rentalapplication/:id', component: RentalapplicationComponent},
  {path: 'addproperty',component: AddpropertyComponent, canActivate: [AuthGuard]},
  {path: 'addapartment',component: AddapartmentComponent, canActivate: [AuthGuard]},
  {path: 'addstudioefficiency',component: AddstudioefficiencyComponent, canActivate: [AuthGuard]},
  {path: 'addhome',component: AddhomeComponent, canActivate: [AuthGuard]},
  {path: 'callback', component: CallbackComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
