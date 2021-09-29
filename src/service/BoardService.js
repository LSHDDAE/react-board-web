import axios from 'axios';

const BOARD_API_BASE_URL = "http://localhost:8080/api/board";

class BoardService {
   getBoards(){
       return axios.get(BOARD_API_BASE_URL);
   }

   boardAdd(board){
        return axios.post(BOARD_API_BASE_URL, board);
   }

   getBoard(idx){
        return axios.get(BOARD_API_BASE_URL, idx);
   }
}


export default new BoardService();