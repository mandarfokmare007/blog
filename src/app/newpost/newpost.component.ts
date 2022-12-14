import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
export interface blogcard {
  title: string;
  article: string;
  time: string | null;
}
@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.scss'],
})
export class NewpostComponent {
  title!: string;
  articles: blogcard[] = [];
  article!: string;
  timestamp = Date.now();
  cleanarticle!: string;
  articlePara: any;
  constructor(public datepipe: DatePipe) {}
  ngOnInit() {
    console.log(this.article);
  }
  Save() {
    this.cleanarticle = this.article.replaceAll('<p>', '&&');
    this.cleanarticle = this.cleanarticle.replace(/<\/?[^>]+(>|$)/g, '');
    this.articlePara = this.cleanarticle.split('&&').filter((el) => el != '');
    console.log('Article para', this.articlePara);
    this.timestamp = Date.now();
    let currenttime = this.datepipe.transform(
      this.timestamp,
      'MMM d, y, h:mm a'
    );
    console.log(this.article);
    this.articles.push({
      title: this.title,
      article: this.articlePara,
      time: currenttime,
    });
    console.log(currenttime);
    console.log('Articles', this.articles);
    localStorage.setItem('posts', JSON.stringify(this.articles));
  }
}
