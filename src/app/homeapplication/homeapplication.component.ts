import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Home } from '../home';
import { Inquiry } from '../inquiry';
import { ManagementService } from '../management.service';

@Component({
  selector: 'app-homeapplication',
  templateUrl: './homeapplication.component.html',
  styleUrls: ['./homeapplication.component.css']
})
export class HomeapplicationComponent implements OnInit {

  home = new Home();

  inquiry = new Inquiry
  
  constructor(private  data: ManagementService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params[`id`]
    this.data.fetchHomeId(id).subscribe(
      response => {
        this.home = response
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
