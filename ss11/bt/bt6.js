"use strict";
class Song {
    constructor(id, name, length) {
        this.id = id;
        this.name = name;
        this.length = length;
    }
    set setName(value) {
        this.name = value;
    }
    set setLength(value) {
        this.length = value;
    }
}
let song = new Song(1, "hello", 3);
console.log(song);
song.setName = "hoho";
song.setLength = 5;
console.log(song);
