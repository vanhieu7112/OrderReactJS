var list;
class Note extends React.Component{
  save(){
    var note = this;
    $.post('/update', {idSua:this.props.id ,noiDung: this.refs.txt.value}, function(data){
      list.setState({mang: data});
      note.setState({onEdit: false});
    });
  }
  cancel(){
    this.setState({onEdit: false});
  }
  edit(){
    this.setState({onEdit: true});
  }
  constructor(props){
    super(props);
    this.state = {
      onEdit: false
    }
  }
    delete(){
      $.post("/delete", {idXoa: this.props.id}, function(data){
        list.setState({mang: data});
      });
    }
      render(){
        if(this.state.onEdit){
          return(
            <div className="div-note">
              <input defaultValue={this.props.children} ref="txt"/>
              <button onClick={()=>{this.save()}}>Lưu</button>
              <button onClick={()=>{this.cancel()}}>Hủy</button>
            </div>
        )
        }else{
          return(
            <div className="div-note">
              <p>{this.props.children}</p>
              <button onClick={()=>{this.delete()}}>Xóa</button>
              <button onClick={()=>{this.edit()}}>Sửa</button>
            </div>
         )
        }
      }
    }

function addDiv(){
  ReactDOM.render(<InputDiv/>, document.getElementById("div-add"));
}

  class List extends React.Component{
      constructor(props){
        super(props);
        list = this;
        this.state = {
          mang: []
        }
      }
          render(){
            return(
              <div className='div-list'>
                <div id="div-add"></div>
                <button onClick={()=>{addDiv()}}> Thêm Món </button>
                  {
                    this.state.mang.map(function(note,index){
                      return <Note key={index} id={index}>{note}</Note>
                    })
                  }
              </div>
           );
         }
         componentDidMount(){
           var that = this;
           $.post("/getNotes", function(data){
             that.setState({mang: data});
           });
         }
        }
class InputDiv extends React.Component{
          send(){
            // list.setState({mang: list.state.mang.concat(this.refs.txt.value)});
            $.post("/add", {note: this.refs.txt.value}, function(data){
              list.setState({mang: data});
            });
            ReactDOM.unmountComponentAtNode(document.getElementById('div-add'));
          }
              render(){
                return(
                  <div>
                    <input type="text" ref="txt" placeholder="Enter Your Food!"/>
                    <button onClick={()=>{this.send()}}> Đồng Ý </button>
                  </div>
               );
              }
            }

ReactDOM.render(
  <div>
    <List />
  </div>,
  document.getElementById('root')
);
