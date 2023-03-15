const { Component } = require("react");


class Counter extends Component{
  state={count :0}
  onIncrease=()=>{
   this.setState((prevCount)=>({count : prevCount.count+1}))
  }

  onDecrease=()=>{
   this.setState((prevCount)=>({count:prevCount.count-1}))
  }
  render(){
   const {count}=this.state
    return(
      <div>
        <h1>Counter</h1>
        <p>{count}</p>
        <div>
          <button onClick={this.onIncrease}>Increase</button>
          <button onClick={this.onDecrease}>Decrease</button>
        </div>
      </div>
    )
  }
}

export default Counter