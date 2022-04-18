
import { Navbar } from "./components/Navbar";
import { Intro } from "./components/Intro" 
import { Matches } from "./components/Matches"
import { About } from "./components/About"
import { Join } from "./components/Join"


function App()  {
  return (
    <div className="App">
   
    <Intro />
    <Matches />
    <About />
    <Join />
    <Navbar />
    
    </div>
  );
}

export default App;
