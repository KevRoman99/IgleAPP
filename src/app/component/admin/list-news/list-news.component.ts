import { noticiasInterface } from './../../../models/noticias';
import { DataApiService } from './../../../services/data-api.service';
import { Component, OnInit } from '@angular/core';
import { NgForm}  from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.css']
})

export class ListNewsComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  private news: noticiasInterface[] = [];
  ngOnInit() {
    this.getListNews();
  }
  getListNews(){
    this.dataApi.getAllNoticias().subscribe(news => {
      this.news = news;
    });
  }
  onDeleteNews(){
    console.log('Delete ');
  }
}
