import { Component } from '@angular/core';
import { Nano } from './Nano';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nani : Nano[] = [
     new Nano(1, "EOLO"),
     new Nano(2, "GONGOLO"),
     new Nano(3, "CUCCIOLO"),
     new Nano(4, "MAMMOLO"),
     new Nano(5, "PISOLO"),
     new Nano(6, "BRONTOLO"),
     new Nano(7, "DOTTO")
  ]
   stringa: string = "hello world"
   classe: string = "classe"
   valore: string = ""
  
}
