import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddapartmentComponent } from './addapartment/addapartment.component';
import { AddhomeComponent } from './addhome/addhome.component';
import { AddpropertyComponent } from './addproperty/addproperty.component';
import { AddstudioefficiencyComponent } from './addstudioefficiency/addstudioefficiency.component';
import { ApartmentapplicationComponent } from './apartmentapplication/apartmentapplication.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { AuthGuard } from './auth.guard';
import { CallbackComponent } from './components/callback/callback.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { HomeapplicationComponent } from './homeapplication/homeapplication.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HomesComponent } from './homes/homes.component';
import { InquiriesComponent } from './inquiries/inquiries.component';
import { RentalapplicationComponent } from './rentalapplication/rentalapplication.component';
import { StudioefficiencyComponent } from './studioefficiency/studioefficency.component';
import { StudioefficiencyapplicationComponent } from './studioefficiencyapplication/studioefficiencyapplication.component';


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
  {path: 'callback', component: CallbackComponent},
  {path: 'fileupload', component: FileuploadComponent },
  {path: 'studioefficiencyapplication/:id', component: StudioefficiencyapplicationComponent},
  {path: 'apartmentapplication/:id', component: ApartmentapplicationComponent},
  {path: 'homeapplication/:id', component: HomeapplicationComponent},
  {path: 'inquiries', component: InquiriesComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
