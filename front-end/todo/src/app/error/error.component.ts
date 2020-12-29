import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorMessage = 'Error occurred.  Contact support at 1-800-get-temp'

  constructor() { }

  ngOnInit() {
  }

}
