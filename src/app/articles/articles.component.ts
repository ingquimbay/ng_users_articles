import { Component, OnInit } from '@angular/core';
import { ArticleService } from "../article.service";
import { Article } from "../article";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})

export class ArticlesComponent implements OnInit {

  articles: Article[];

  constructor(private articlesService: ArticleService) { }

  ngOnInit() {
    this.getArticles();
  }

  getArticles() {
    this.articlesService.getArticles().subscribe((response) => {
      this.articles = response, console.log(this.articles);
    })
  }

}
