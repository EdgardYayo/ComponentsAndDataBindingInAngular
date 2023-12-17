import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-game-control',
    templateUrl: './game-control.component.html',
    styleUrl: './game-control.component.css'
})
export class GameControlComponent {
  @Output() gameInterval = new EventEmitter<number>();
  interval;
  lastNumber = 0;

  onGameStart() {
    this.interval = setInterval(() => {
        this.gameInterval.emit(this.lastNumber + 1);
        this.lastNumber++;
    }, 1000);
  }

  onGameStop(){
    clearInterval(this.interval);
  }
}