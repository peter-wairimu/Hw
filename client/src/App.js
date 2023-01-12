import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Blog } from "./components/Pages/Blog";
import { Contact } from "./components/Pages/Contact";
import Degree from "./components/Pages/Degrees/Degree";
import Advisor from "./components/Pages/Advisor/Advisor";
import Inquiries from "./components/Pages/Inquiries/Inquire";
import Competition from "./components/Pages/Competition/Competition";
import Announcements from "./components/Pages/Announcement/Announcement";
import Motivation from "./components/Pages/Motivations/Motivation";


function App() {
 
  return (
    <>
  <div className="App-header">
    <Router>
        <NavBar />
        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
            <Route path="/degree" component={Degree} />
            <Route path="/advisor" component={Advisor} />
            <Route path="/motivation" component={Motivation}/>
            <Route path="/announce" component={Announcements}/>
            <Route path="/inquries" component={Inquiries} />
            <Route path="/competitions" component={Competition} />



          </Switch>
        </div>
      </Router>
    </div>


    


    </>

    
  );
}

export default App;
