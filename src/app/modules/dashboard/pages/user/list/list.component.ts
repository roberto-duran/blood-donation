import { Component } from '@angular/core';

@Component({
  selector: 'dhs-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  donationList = [
    {
      location: 'Ered Nimrais',
      date: '2023-02-05',
      time: '9:30 AM'
    },
    {
      location: 'Ithilien',
      date: '2022-10-15',
      time: '9:30 AM'
    },
    {
      location: 'Mordor',
      date: '2021-05-10',
      time: '9:30 AM'
    },
    {
      location: 'Numenor',
      date: '2020-12-05',
      time: '9:30 AM'
    },
  ]
}
