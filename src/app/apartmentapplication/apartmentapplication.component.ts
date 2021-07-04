import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apartment } from '../apartment';
import { Inquiry } from '../inquiry';
import { ManagementService } from '../management.service';

@Component({
  selector: 'app-apartmentapplication',
  templateUrl: './apartmentapplication.component.html',
  styleUrls: ['./apartmentapplication.component.css']
})
export class ApartmentapplicationComponent implements OnInit {

  apartment = new Apartment();

  inquiry = new Inquiry
  
  constructor(private  data: ManagementService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params[`id`]
    this.data.fetchApartmentId(id).subscribe(
      response => {
        this.apartment = response
      },
      error => console.log(error)
    )
  }

  storeInquiry(){
    this.data.addInquiry(this.inquiry).subscribe(
      response => {
        this.router.navigate([`homepage`])
      }
    )

  }

  }
