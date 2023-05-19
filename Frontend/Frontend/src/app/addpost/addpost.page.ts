import { Component, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PostService } from '../service/post.service';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.page.html',
  styleUrls: ['./addpost.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AddpostPage implements OnInit {

  title: string = "";
  content: string = "";
  city: string = "";
  imgString: string = "";
  
  constructor(private postService: PostService) { }

  ngOnInit() { }

  savePost() {
    var now = new Date();
    var dd = now.getDate() + 2;
    var mm = now.getMonth() + 1;
    var yyyy = now.getFullYear();
    var date = new Date(yyyy + "-" + mm + "-" + dd);
    const post = {
      'postId': '',
      'title': this.title,
      'city': this.city,
      'content': this.content,
      "date": date,
      "imageUrl": this.imgString
    }
    this.postService.addPost(post).subscribe(() => console.log("post added"));
  }

  loadImageFromDevice($event: Event) {
    const target = $event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    console.log(file);
    this.convertToBase64(file)
  };
  convertToBase64(file: File) {
    const observable = new Observable((Subscriber: Subscriber<any>) => {
      this.readFile(file, Subscriber)
    })
    observable.subscribe((d) => {
      console.log(d); 
      this.imgString = d
    })
  }

  readFile(file: File, subscriber: Subscriber<any>) {
    const filereader = new FileReader();
    filereader.readAsDataURL(file)
    filereader.onload = () => {
      subscriber.next(filereader.result)
      subscriber.complete()
    }
    filereader.onerror = () => {
      subscriber.error()
      subscriber.complete()
    }
  }
}