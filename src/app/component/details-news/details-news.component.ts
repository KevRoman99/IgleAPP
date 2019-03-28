import { noticiasInterface } from './../../models/noticias';
import { DataApiService } from './../../services/data-api.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-details-news',
  templateUrl: './details-news.component.html',
  styleUrls: ['./details-news.component.css']
})
export class DetailsNewsComponent implements OnInit {

  constructor(private dataApi: DataApiService, private route: ActivatedRoute) { }
  public news: noticiasInterface = {};


  ngOnInit() {
  const idNews = this.route.snapshot.params['id'];
  this.getDetaills(idNews);
    
  }
  getDetaills(idNews: string): void{
    this.dataApi.getOneNoticia(idNews).subscribe( news =>{
      // console.log('Detail news', news);
      this.news = news;
    });
  }
}
