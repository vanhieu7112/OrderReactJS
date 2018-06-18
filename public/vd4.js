class Note extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      num: 0
    }
  }
      render(){
        return(
          <div>
            <img src={this.props.src}/>
            <p>{this.props.children}</p>
          </div>
       );
      }
    }
class List extends React.Component{
      constructor(props){
        super(props);
        this.state = {
          mang: [
            {srcHinh:"images/1.png", noidung:"Hello"},
            {srcHinh:"images/2.png", noidung:"Hi"},
            {srcHinh:"images/3.png", noidung:"VanHieu"},
          ]
        }
      }
      add(){
        this.state.mang.unshift({srcHinh:"images/2.png", noidung:"ReactJS"});
        this.setState(this.state);
      }
          render(){
            return(
              <div>
              <button onClick={()=> {this.add()}}>Them</button>
              {
                this.state.mang.map(function(note, index){
                  return <Note key={index} src={note.srcHinh}>{note.noidung}</Note>
                })
              }
              </div>
           );
        }
}
ReactDOM.render(
  <div>
    <List />
  </div>
  ,
  document.getElementById('root')
);
