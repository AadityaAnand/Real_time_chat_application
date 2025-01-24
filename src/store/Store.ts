type userId = string;

export interface Chat {
    userId: string;
    name: string;
    message: string;
    upvotes: userId[];
}
export abstract class Store{
    constructor( ){

    } 
    initRoom(roomId: string) {

    }
    getChats(room: string, limit: number, offset: number){

    }
    addChat(room: string, limit: number, offset: number){

    }
}