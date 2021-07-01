import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManagementService } from '../management.service';
import { Studioefficiency } from '../studioefficiency'

@Component({
  selector: 'app-studioefficency',
  templateUrl: './studioefficency.component.html',
  styleUrls: ['./studioefficency.component.css']
})
export class StudioefficiencyComponent implements OnInit {

  studioefficiencies!: Studioefficiency[];

  constructor(private data:ManagementService, private router: Router) { }

  ngOnInit(): void {
    this.getAllProperties();
  }

getAllProperties(){
  this.data.fetchStudioEfficiencies().subscribe(
    response => {
      this.studioefficiencies = response;
    }
  )
}

viewDetails(id: number){
  this.router.navigate([`rentalapplication`, id])

}

}
