import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Home } from '../home';
import { ManagementService } from '../management.service';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.css']
})
export class HomesComponent implements OnInit {

  homes!: Home[];

  constructor(private data:ManagementService, private router: Router) { }

  ngOnInit(): void {
    this.getAllProperties();
  }

getAllProperties(){
  this.data.fetchHomes().subscribe(
    response => {
      this.homes = response;
    }
  )
}

viewDetails(id: number){
  this.router.navigate([`rentalapplication`, id])

}

}
