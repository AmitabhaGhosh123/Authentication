import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  events:any = [];
  constructor(private _evtService:EventsService) {
    
  }

  ngOnInit(): void {
    this._evtService.getEvents()
     .subscribe(
      res => this.events = res,
      err => console.log(err)
     )
  }

}
