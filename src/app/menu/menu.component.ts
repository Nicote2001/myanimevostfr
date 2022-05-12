import { Component, OnInit, ɵAPP_ID_RANDOM_PROVIDER } from '@angular/core';
import { MenuApiCallerService } from '../ApiCallerService/menu.api-caller.service';
import { IAnime } from '../objects/anime.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public topAnimes: IAnime[] = [];

  constructor(private api : MenuApiCallerService) 
  {
    
  }

  ngOnInit(): void {
    this.getListAnime();
  }

  getListAnime()
  {
    this.api.getTopAnimes().subscribe(data =>{
      this.topAnimes = data.data;
    })
  }

}
