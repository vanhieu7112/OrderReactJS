class Album extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      hinh: 1
    }
  }
  nex(){
    this.setState({hinh: this.state.hinh==3? 3: this.state.hinh + 1});
  }
  prev(){
    this.setState({hinh: this.state.hinh==1? 1:this.state.hinh - 1});
  }
      render(){
        return(
        <div className="div-album">
          <img src={"images/" + this.state.hinh + ".png"}/>
          <hr/>
          <button onClick={()=>{this.nex()}}>Tiếp theo</button>
          <button onClick={()=>{this.prev()}}>Quay lại</button>
        </div>
       );
      }
    }
ReactDOM.render(
  <Album />,
  document.getElementById('root')
);
