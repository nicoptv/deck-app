import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent implements OnInit {

  deck : string[] = [];
  url : string;
  deck_is_empty : boolean = false;

  constructor() { }

  ngOnInit() {
    this.initCard();
  }

  shuffle () : void{
    let idCard : number;
    for (let i = this.deck.length - 1; i > 0; i--) {
      idCard = Math.floor(Math.random() * (i + 1));
      [this.deck[i], this.deck[idCard]] = [this.deck[idCard], this.deck[i]]
    }
  }

  dealOneCard () : void {
    if (this.deck.length != 0){
      this.url = this.deck[0];
      this.deck.splice(0,1);
    }else{
      this.url = undefined;
      this.deck_is_empty = true;
    }
  }

  initCard() : void{
    for (let index = 1; index < 53; index++) {
      this.deck.push('../../assets/' + index + '.jpg');
    }
    this.deck_is_empty = false;
  }

  
}
