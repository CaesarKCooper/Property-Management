import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Inquiry } from '../inquiry';
import { ManagementService } from '../management.service';
import { Studioefficiency } from '../studioefficiency';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studioefficiencyapplication',
  templateUrl: './studioefficiencyapplication.component.html',
  styleUrls: ['./studioefficiencyapplication.component.css']
})
export class StudioefficiencyapplicationComponent implements OnInit  {

  studioefficiency = new Studioefficiency();
  inquiry = new Inquiry();
  

  constructor(private  data: ManagementService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params[`id`]
    this.data.fetchStudioEfficiencyId(id).subscribe(
      response => {
        this.studioefficiency = response
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
