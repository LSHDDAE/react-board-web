import React, { Component } from 'react';
import BoardService from '../../service/BoardService';

class BoardRead extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            idx: this.props.match.params.idx,
            board: {}
        }
    }

    componentDidMount(){
        BoardService.getBoard(this.state.idx).then( res => {
            this.setState({board: res.data})
        });
    }
    

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default BoardRead;