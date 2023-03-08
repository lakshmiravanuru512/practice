import UserProfile from "./components";
import "./App.css"
const userDetailsList=[{
  uniqueNo:1,
  imageUrl:"https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
  name:"Lakshmi",
  role:"Frontened Developer"
},
{
  uniqueNo:2,
  imageUrl:"https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
  name:"Lakshmi",
  role:"Frontened Developer"
}, 
{
  uniqueNo:3,
  imageUrl:"https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
  name:"Lakshmi",
  role:"Frontened Developer"
},
{
  uniqueNo:4,
  imageUrl:"https://assets.ccbp.in/frontend/react-js/esther-howard-img.png",
  name:"Lakshmi",
  role:"Frontened Developer"
},
{
  uniqueNo:5,
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
     <UserProfile userDetails={eachItem} key={eachItem.uniqueNo}/>
     ))
     }
    </ul>
  </div>
)


export default App;
