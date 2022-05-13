import { Component, OnInit } from '@angular/core';
import { toArray } from 'rxjs';
import { Menu } from 'src/app/model/models/Menu.model';
import { HttpClientService } from 'src/app/services/common/http-client.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private clientServices: HttpClientService) { }
  menu:Menu[]=[];
  ngOnInit(): void {

    this.clientServices.get<Menu>({
      controller: "menu"
    }).subscribe(
      (success) => {

      },
      (error) => {
        console.log(error);
      }
    );
  }

}
