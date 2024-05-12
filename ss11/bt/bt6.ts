class Song{
    public readonly id: number;
    private name: string;
    private length: number;
    constructor(id: number, name: string, length: number) {
        this.id = id;
        this.name = name;
        this.length = length
    }
    set setName(value: string){
        this.name = value
    }
    set setLength(value: number){
        this.length = value
    }
}
let song = new Song(1, "hello", 3);
console.log(song);
song.setName = "hoho";
song.setLength = 5;
console.log(song);