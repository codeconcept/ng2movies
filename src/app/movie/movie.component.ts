import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() movie;
  @Output() onActorMadeFovorite = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  favoriteActor(actorName){
    this.onActorMadeFovorite.emit(actorName);
  }

}
