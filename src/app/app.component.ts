import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private http = inject(HttpClient);
  title = 'typescriptTips';
  users: any;

  ngOnInit(): void {
    this.http.get('https://randomuser.me/api/?results=15').subscribe((response: any) => {
      console.log(response.results);
      this.users = response.results;
    })
  }
}
