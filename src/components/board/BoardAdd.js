import React, { Component } from 'react';
import BoardService from '../../service/BoardService';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



class BoardAdd extends Component {
    

    constructor(props) {
        super(props);
        
        this.state = {
            title: '',
            content: '',
            writer: '',
            message: null
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    saveBoard = (e) => {
        e.preventDefault();

        let board = {
            title: this.state.title,
            content: this.state.content,
            writer: this.state.writer,
        }

        BoardService.boardAdd(board).then( res => {
            this.setState({
                message: board.writer + '님 게시글이 등록되었습니다.'
            })
            console.log(this.state.message);
            this.props.history.push('/board');
        }).catch(err => {
            console.log('saveBoard() 에러', err);
        });
    }
    
    render() {
        return (
            <div>
                <Typography variant="h4" >글 추가</Typography>
                <form  noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="title" type="text" name="title" fullWidth margin="normal" value={this.state.title} onChange={this.onChange}/>
                    <TextField type="text" name="content" fullWidth margin="normal" value={this.state.content} onChange={this.onChange}/>
                    <TextField type="outlined-basic" label="writer" variant="outlined" name="writer" fullWidth margin="normal" value={this.state.writer} onChange={this.onChange}/>

                    <Button variant="contained" color="primary" onClick={this.saveBoard}>저장</Button>
                </form>
            </div>
        );
    }
}


export default BoardAdd;