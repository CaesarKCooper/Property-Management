import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apartment } from '../apartment';
import { AuthGuard } from '../auth.guard';
import { Home } from '../home';
import { ManagementService } from '../management.service';

@Component({
  selector: 'app-addapartment',
  templateUrl: './addapartment.component.html',
  styleUrls: ['./addapartment.component.css']
})
export class AddapartmentComponent implements OnInit {

apartment = new Apartment();

constructor(private data: ManagementService, private router:Router, private authguard: AuthGuard) { }

submitProperty(){
  this.data.addApartment(this.apartment).subscribe(
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
  


