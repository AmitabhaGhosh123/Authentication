import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.scss']
})
export class SpecialEventsComponent implements OnInit {

  specialEvents:any = [];

  constructor(private _specialEvtService:EventsService,private _router:Router) {}

  ngOnInit(): void {
    this._specialEvtService.getSpecialEvents()
    .subscribe(
      res => this.specialEvents = res,
      err => {
        if(err instanceof HttpErrorResponse) {
          if(err.status === 401) {
            this._router.navigate(['/login']);
          }
        }
      } 
    )
  }

  
}
