import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { ManagementService } from '../management.service';
import { Studioefficiency } from '../studioefficiency';

@Component({
  selector: 'app-addstudioefficiency',
  templateUrl: './addstudioefficiency.component.html',
  styleUrls: ['./addstudioefficiency.component.css']
})
export class AddstudioefficiencyComponent implements OnInit {

studioefficiency = new Studioefficiency

  constructor(private data: ManagementService, private router:Router, private authguard: AuthGuard) { }

  submitProperty(){
    this.data.addStudioEfficiency(this.studioefficiency).subscribe(
      response => {
        this.router.navigate([`studioefficiency`])
      }
    )
  }
  
    ngOnInit(): void {
    }
  
  logout(){
    this.authguard.logout();
  }
  
  }
