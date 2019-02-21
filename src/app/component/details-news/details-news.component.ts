import { noticiasInterface } from './../../models/noticias';
import { DataApiService } from './../../services/data-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-news',
  templateUrl: './details-news.component.html',
  styleUrls: ['./details-news.component.css']
})
export class DetailsNewsComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  public news: noticiasInterface;


  ngOnInit() {
    //const idNews = 'kZ00bp6IKEQTJCVvN6xB';
    /*this.dataApi.getOneNoticia(idNews).subscribe( news =>{
      console.log(news);
    });*/
  }

}
