import Home from "./pages/Home"
import { BrowserRouter as Router , Routes ,Route } from "react-router-dom";

import Social from "./pages/Social";
import Store from "./pages/Store";
import Help from "./pages/Help";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='' element={<Home/>} />
          <Route exact path='/social' element={<Social/>} />
          <Route exact path='/help' element={<Help/>} />
          <Route exact path='/store' element={<Store/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
