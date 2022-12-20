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
    this.timestamp = Date.now();
    let currenttime = this.datepipe.transform(
      this.timestamp,
      'MMM d, y, h:mm a'
    );
    this.articles.push({
      title: this.title,
      article: this.article,
      time: currenttime,
    });
    localStorage.setItem('posts', JSON.stringify(this.articles));
  }
}
