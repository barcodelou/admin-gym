

import Navbar from './component/navbar';
import { Route, Routes} from "react-router-dom";
import {Homepage,Costumer,ClassOnline,ClassOffline,Booking, SignIn,News} from "./page"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Homepage />}/>
        <Route path="/class-online" exact element={<ClassOnline />}/>
        <Route path="/class-offline" exact element={<ClassOffline />}/>
        <Route path="/booking" exact element={<Booking />}/>
        <Route path="/costumer" exact element={<Costumer />}/>
        <Route path="/sign-in" exact element={<SignIn />}/>
        <Route path="/News" exact element={<News />}/>
      </Routes>
    </div>
  );
}

export default App;
