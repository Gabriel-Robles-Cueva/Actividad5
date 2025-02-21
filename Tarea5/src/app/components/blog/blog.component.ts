import { Component, Input } from '@angular/core';
import { Inotice } from 'src/app/interfaces/inotice';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  @Input() listacalculos: Inotice[] = [{titulo: "Prueba", imagen:"a", texto:"texto de prueba", fecha_publicacion: "a"}]
}
