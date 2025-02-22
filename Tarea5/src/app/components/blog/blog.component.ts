import { Component, Input } from '@angular/core';
import { Inotice } from 'src/app/interfaces/inotice';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  @Input() listacalculos: Inotice[] = [
    {title: "Prueba", image:"https://placehold.co/300x200", text:"texto de prueba", date: "a"},
    {title: "Prueba2", image:"https://placehold.co/300x200", text:"texto de prueba 2", date: "b"}
  ]
}
