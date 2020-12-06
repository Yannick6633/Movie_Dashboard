import { Component, OnInit } from '@angular/core';
import { Actor } from '../shared/model/actor';
import { ActorService } from '../shared/service/actor.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {

  actors: Actor[];
  constructor(private actorService: ActorService) { }

  ngOnInit(): void {
    this.getActors();
  }

  getActors() {
    this.actorService.getActors()
    .subscribe( data => {
      this.actors = data;
      console.log(data);
    })
  }
}
