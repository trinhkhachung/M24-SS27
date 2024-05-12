export interface IPlayer{
    id:number;
    name: string;
    score: number;
}
class Player implements IPlayer{
    id: number;
    name: string;
    score: number;
    constructor(id:number,name:string,score:number){
        this.id = id;
        this.name = name;
        this.score = score;
    }
}
class PlayerMain {
    // Khởi tạo hàm constructor có giá trị là dữ liệu lấy từ localStrorage
    players:Player[]
    constructor(){
        //Gán lại giá trị cho mảng players là dữ liệu lấy từ localStorage

        //this.players = JSON.parse(localStorage.getItem("players") || "")
        const playerLocal = localStorage.getItem("players")
        this.players = playerLocal ? JSON.parse(playerLocal) : [];
    }
    /**
     * Lưu dữ liệu lên local storage
     * Trịnh Khắc Hưng
     */
    savePlayer() {
        localStorage.setItem("players", JSON.stringify(this.players));
      }
    renderPlayer(){

    }
    createPlayer(newplayer:Player): void {
        //push đối tượng newPlayer vào trong players
        this.players.push(newPlayer);
        //lưu dữ liệu lên localStorage
        this.savePlayer();
    }

    removePlayer(playerId:number): void{
        //lọc ra những player có id khác với id cần xóa
        this.players = this.players.filter((player: Player) => player.id !== playerId);
    }
    handleIncreaseScore(id: number){
        //Bước 1: tìm kiếm vị trí của player trong mảng theo id

        const playerIndex = this.players.findIndex((player: Player) => player.id === id);

        //Bước 2: cập nhật số điểm của player sau khi tìm dduoc vị trí của nó

        if (playerIndex === -1){
            //trong trường hợp không tìm thấy player
            console.log("l=không tìm thấy player");
        } else{
            //trong trường hợp tìm thấy vị trí của player thì tiến hành cập nhật score
            this.players[playerIndex].score--
        }
        //Bước 3: lưu trữ dữ liệu mới sau khi cập nhật
        this.savePlayer();
    }
    /**
     * Tính tổng tất cả các player trong mảng 
     * @returns trả về só lượng player đang có
     * Trịnh Khắc Hưng
     */
    totalPlayer():number{
        return this.players.length;
    }
    /**
     *tính tổng tất cả score của players 
     * 
     *
     */
    updateScore(type: string, id: number){

    }
    updatePlayer(){

    }
    odeletePlayer(){

    }
}