import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ManagementService } from '../management.service';
import { Studioefficiency } from '../studioefficiency';

@Component({
  selector: 'app-rentalapplication',
  templateUrl: './rentalapplication.component.html',
  styleUrls: ['./rentalapplication.component.css']
})
export class RentalapplicationComponent implements OnInit {

studioefficiency = new Studioefficiency();

  constructor(private  data: ManagementService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params[`id`]
    this.data.fetchStudioEfficiencyId(id).subscribe(
      response => {
        this.studioefficiency = response
      },
      error => console.log(error)
    )
  }
  }



