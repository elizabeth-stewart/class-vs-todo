import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name = ''

  // inject username into routing
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // snapshot = list of parameters
    this.name = this.route.snapshot.params['name']
  }

}
