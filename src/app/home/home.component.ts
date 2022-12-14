import { Component, EventEmitter, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  visibleSidebar1: any;
  items!: MenuItem[];
  homePost: any;
  trim!: string;
  ngOnInit() {
    this.homePost = localStorage.getItem('posts');
    this.homePost = JSON.parse(this.homePost);
    this.trim = this.homePost[0].article[1].substring(0, 189) + '....';
    console.log(this.trim);
  }
}
