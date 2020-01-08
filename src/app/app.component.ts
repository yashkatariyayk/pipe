import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pipe';
  searchname:string=""
  Products=[
            {
              No:1,
              ProductName:"Mobile",
              Price:20000,
              Avaliability:"Available"
            },
            {
              No:2,
              ProductName:"Mobile",
              Price:30000,
              Avaliability:"Not Available"
            },
            {
              No:3,
              ProductName:"TV",
              Price:25000,
              Avaliability:"Available"
            },
            {
              No:4,
              ProductName:"Washing Machine",
              Price:55000,
              Avaliability:"Available"
            },
            {
              No:5,
              ProductName:"TV",
              Price:35000,
              Avaliability:"Not Available"
            },
            {
              No:6,
              ProductName:"Earphone",
              Price:15000,
              Avaliability:" Available"
            }
  ];
}
