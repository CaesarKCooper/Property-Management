import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RentalapplicationComponent } from './rentalapplication/rentalapplication.component';
import { HomesComponent } from './homes/homes.component';
import { ApartmentsComponent } from './apartments/apartments.component';
import { HttpClientModule } from '@angular/common/http';
import { StudioefficiencyComponent } from './studioefficiency/studioefficency.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AddpropertyComponent } from './addproperty/addproperty.component';
import { CallbackComponent } from './components/callback/callback.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { AddhomeComponent } from './addhome/addhome.component';
import { AddapartmentComponent } from './addapartment/addapartment.component';
import { AddstudioefficiencyComponent } from './addstudioefficiency/addstudioefficiency.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { StudioefficiencyapplicationComponent } from './studioefficiencyapplication/studioefficiencyapplication.component';
import { ApartmentapplicationComponent } from './apartmentapplication/apartmentapplication.component';
import { HomeapplicationComponent } from './homeapplication/homeapplication.component';
import { InquiriesComponent } from './inquiries/inquiries.component';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactpageComponent,
    RentalapplicationComponent,
    HomesComponent,
    ApartmentsComponent,
    StudioefficiencyComponent,
    AddpropertyComponent,
    CallbackComponent,
    AddhomeComponent,
    AddapartmentComponent,
    AddstudioefficiencyComponent,
    FileuploadComponent,
    StudioefficiencyapplicationComponent,
    ApartmentapplicationComponent,
    HomeapplicationComponent,
    InquiriesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatOptionModule,
    MatProgressSpinnerModule
    
    
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
