import { Component, OnInit } from '@angular/core';
import { Inquiry } from '../inquiry';
import { ManagementService } from '../management.service';

@Component({
  selector: 'app-inquiries',
  templateUrl: './inquiries.component.html',
  styleUrls: ['./inquiries.component.css']
})
export class InquiriesComponent implements OnInit {

inquiries!: Inquiry[];

  constructor(private data: ManagementService, ) { }

  ngOnInit(): void {
    this.getAllInquiries();
  }

getAllInquiries(){
  this.data.fetchInquiry().subscribe(
    response => {
      this.inquiries = response
    }
  )
}

}
