import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

  constructor(
    private dataService: DataService
  ){}

  ngOnInit() {
    this.dataService.getPosts()
    .subscribe( posts => {
      console.log(posts)
    })

  }
}