import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {

    // creation observable
    const interval$ = interval(1000);

    // subscribe immediately
    interval$.subscribe(value => console.log(value))

    // subscribe after 3s
    setTimeout(() => interval$.subscribe(value => console.log(value)), 3000)

  }

}
