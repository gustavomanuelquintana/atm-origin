import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import HomeContainer from "./Components/HomeContainer/HomeContainer";
import CardPinContainer from "./Components/CardPinContainer/CardPinContainer";
import ProcessClient from './Components/processClient/ProcessClient';
import Balance from './Components/Balance/Balance';
import Retiro from './Components/Retiro/Retiro';
import { CartProvider } from "./Components/Context/CartContext";
import ResumenOperacion from './Components/ResumenOperacion/ResumenOperacion';



function App() {
    return (
      <CartProvider defaultCart={[]}>
        <BrowserRouter>
        <NavBar />
          <Switch>
            <Route exact path="/">
            <HomeContainer/>
            </Route>
            <Route exact path="/sectionpin">
            <CardPinContainer />
            </Route>
            <Route exact path="/operations">
            <ProcessClient />
            </Route>
            <Route exact path="/balance">
            <Balance />
            </Route>
            <Route exact path="/retiro">
            <Retiro />
            </Route>
            <Route exact path="/resumenOperacion">
            <ResumenOperacion />
            </Route>
          </Switch>
        </BrowserRouter>
        </CartProvider>
    );
}
export default App;