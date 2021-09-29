
import BoardList from "../board/BoardList";
import BoardAdd from "../board/BoardAdd";
import {BrowserRouter, Route, Switch} from 'react-router-dom';


const AppRouter = () => {
    return(
        <div style={style}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={BoardList}></Route>
                    <Route exact path="/board" component={BoardList}></Route>
                    <Route exact path="/board-add" component={BoardAdd}></Route>

                </Switch>
            </BrowserRouter>
        </div>
    );
}

const style = {
    marginTop: '80px'
}

export default AppRouter;