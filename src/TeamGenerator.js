import {Character} from "./Character.js";

export class TeamGenerator  {
    constructor(...person) {
        this.team = person;
    }
    *[Symbol.iterator]() {
        const { team } = this;

        for (const item of team) {
            yield item;
        }
    }
}

const swordsman = new Character( 'Мечник', 'swordsman', 100, 1, 40, 50 );
const swordsmani = new Character( 'Мечник', 'swordsmani', 90, 2, 40, 50 )
const us = new TeamGenerator( swordsman, swordsmani );


for (const char of us) {
    console.log(char);
}
