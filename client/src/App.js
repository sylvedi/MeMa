import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import Beauty from "./pages/beauty/Beauty";
import Fashion from "./pages/fashion/Fashion";
import News from "./pages/news/News";
import Beautys from "./pages/beautys/Beautys"
import Profile from "./pages/profile/Profile";





function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/news">{user ? <News /> : <News />}</Route>
        <Route path="/beauty">{user ? <Beauty /> : <Beauty />}</Route>
        <Route path="/fashion">{user ? <Fashion /> : <Fashion />}</Route>
        <Route path="/beautys">{user ? <Beautys /> : <Beautys />}</Route>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/write">{user ? <Write /> : <Register />}</Route>
        <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
        <Route path="/profile">{user ? <Profile /> : <Profile />}</Route>
        <Route path="/post/:postId">
          <Single />
        
        </Route>
        
      </Switch>
 
    </Router>
  );
}

export default App;
