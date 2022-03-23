import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private dataService : DataService) { }


  users : any[] = []

  ngOnInit(): void {
    this.dataService.getUsers().subscribe(u => { 
         this.users = u 
        
        })
  }

}
