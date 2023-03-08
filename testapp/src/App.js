import UserProfile from "./components";
import "./App.css"
const userDetailsList=[{
  imageUrl:"https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
  name:"Lakshmi",
  role:"Frontened Developer"
},
{
  imageUrl:"https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
  name:"Lakshmi",
  role:"Frontened Developer"
}, 
{
  imageUrl:"https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
  name:"Lakshmi",
  role:"Frontened Developer"
},
{
  imageUrl:"https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
  name:"Lakshmi",
  role:"Frontened Developer"
},
{
  imageUrl:"https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
  name:"Lakshmi",
  role:"Frontened Developer"
}

 ]


const App=()=>(
  <div className="list-container">
    <h1 className="title">Users List</h1>
    <ul>
     {
     userDetailsList.map((eachItem)=>(
     <UserProfile userDetails={eachItem}/>
     ))
     }
    </ul>
  </div>
)


export default App;
