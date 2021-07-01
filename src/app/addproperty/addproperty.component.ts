import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apartment } from '../apartment';
import { AuthGuard } from '../auth.guard';
import { AuthService } from '../auth.service';
import { Home } from '../home';
import { ManagementService } from '../management.service';
import { Studioefficiency } from '../studioefficiency';

@Component({
  selector: 'app-addproperty',
  templateUrl: './addproperty.component.html',
  styleUrls: ['./addproperty.component.css']
})
export class AddpropertyComponent implements OnInit {

studioefficiency = new Studioefficiency();
home = new Home();
aparment = new Apartment();

  constructor(private data: ManagementService, private router:Router, private authguard: AuthGuard) { }

submitProperty(){
  this.data.addStudioEfficiency(this.studioefficiency).subscribe(
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
