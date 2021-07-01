import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { Home } from '../home';
import { ManagementService } from '../management.service';

@Component({
  selector: 'app-addhome',
  templateUrl: './addhome.component.html',
  styleUrls: ['./addhome.component.css']
})
export class AddhomeComponent implements OnInit {

home = new Home();

  constructor(private data: ManagementService, private router:Router, private authguard: AuthGuard) { }

  submitProperty(){
    this.data.addHome(this.home).subscribe(
      response => {
        this.router.navigate([`homepage`])
      }
    )
  }
  
    ngOnInit(): void {
    }
  
  logout(){
    this.authguard.logout();
  }
  
  }


