import Header from './Header';
import { Route, Switch } from 'react-router-dom';
// import Home from './Home';
import Login from './Login';
import Signup from './Signup';
// import NotFound from './NotFound';

function App() {
    return (
        <>
            <Header />
            <Switch>
                {/* <Route path='/' exact>
                    <Home />
                </Route> */}
                <Route path='/login'>
                    <Login />
                </Route>
                <Route path='/signup'>
                    <Signup />
                </Route>
                {/* <Route path='*'>
                    <NotFound />
                </Route> */}
            </Switch>

        </>
    )
}

export default App;