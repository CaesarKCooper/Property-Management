import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apartment } from '../apartment';
import { ManagementService } from '../management.service';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
export class ApartmentsComponent implements OnInit {

  apartments!: Apartment[];

  constructor(private data:ManagementService, private router: Router) { }

  ngOnInit(): void {
    this.getAllProperties();
  }

getAllProperties(){
  this.data.fetchApartments().subscribe(
    response => {
      this.apartments = response;
    }
  )
}

viewDetails(id: number){
  this.router.navigate([`rentalapplication`, id])

}

}
