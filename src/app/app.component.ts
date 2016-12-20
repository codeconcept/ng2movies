import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Films";
  actorChosen;

  sciFiMovie = {
    title: 'The Terminator',
    year: 1984,
    director: 'James Cameron',
    actors: [ 'Arnold Schwarzenegger', 'Linda Hamilton', 'Michael Biehn']    
  }

  showActor(actor){
    this.actorChosen = actor;
  }

}
