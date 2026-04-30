import {Character} from "./Character.js";

export class TeamIterator {
    constructor(...person) {
        this.team = person;
    }

    [Symbol.iterator] () {
        const { team } = this;
        let index = 0;
        return {

            next () {
                if ( index < team.length ) {
                    return { value: team[index++], done: false };
                }else {
                    return { done: true };
                }
            }
        }
    }
}
const swordsman = new Character( 'Мечник', 'swordsman', 100, 1, 40, 50 );
const swordsmani = new Character( 'Мечник', 'swordsmani', 90, 2, 40, 50 )
const us = new TeamIterator( swordsman, swordsmani );


const iterator = us[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
