class Com extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      num: 0
    }
  }
  add(){
    this.setState({num: this.state.num + 1});
  }
      render(){
        return(
         <button onClick={()=>{this.add()}}> Hello {this.state.num} </button>
       );
      }
    }
ReactDOM.render(
  <Com />,
  document.getElementById('root')
);
