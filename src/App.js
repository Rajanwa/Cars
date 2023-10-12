import React from 'react';
import First from "./Pages/First"
import Second from "./Pages/Second"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link, Route, Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
// import axios from 'axios';


const App = () => {
  // const [na, sena] = useState([]);
  // useEffect(() => {
  //   async function date() {
  //     const res = await axios.get("./data.json")
  //     // console.log(res.data.data);
  //     sena((val) => {
  //       return ([...val, res.data.data])
  //     })
  //     console.log(na);
  //     date();
  //   }
  // }, [])

  return (<>
    <Routes>
      <Route path='/' Component={First}></Route>
      <Route path='/second' Component={Second}></Route>
    </Routes>

    <NavLink>
      <Link to="/"><button className="but but-danger">One</button></Link>
      <Link to="/second"><button>Two</button></Link>
    </NavLink>
  </>)
}
export default App;
