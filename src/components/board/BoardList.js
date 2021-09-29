import React, { Component } from 'react';
//import {Link} from 'react-router-dom';
import BoardService from "../../service/BoardService";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//import CreateIcon from '@material-ui/icons/Create';
//import DeleteIcon from '@material-ui/icons/Delete';

class BoardList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            boards: []
        }
    }

    componentDidMount() {
        BoardService.getBoards().then((res) => {
            this.setState({ boards: res.data });
        });
    }

    boardAdd = () => {
        this.props.history.push('/board-add');
    }

    boardRead = (idx) => {
        //window.localStorage.setItem("idx",idx);
        this.props.history.push('/board-read/${idx}');
    }

    render() {
        return (
            <div>
                <Typography variant="h4" style={style}>Boards List</Typography>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>글 번호</TableCell>
                            <TableCell>제목</TableCell>
                            <TableCell>작성자</TableCell>
                            <TableCell>작성일</TableCell>
                            <TableCell>조회수</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            this.state.boards.map(board =>
                                <TableRow key={board.idx}>
                                    <TableCell>{board.idx}</TableCell>
                                    <TableCell onClick={()=> this.boardRead(board.idx)}><Button>{board.title}</Button></TableCell>
                                    <TableCell>{board.writer}</TableCell>
                                    <TableCell>{board.createTime}</TableCell>
                                    <TableCell>{board.hit}</TableCell>
                                </TableRow>
                            )
                        }
                    </TableBody>
                </Table>
                <Button variant="contained" color="primary" onClick={this.boardAdd}>글쓰기</Button>
            </div>
        );
    }
}

const style = {
    display: 'flex',
    justifyContent: 'center'
}

export default BoardList;