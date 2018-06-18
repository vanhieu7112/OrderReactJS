function getName(name){
  alert(name);
}
class VanHieu extends React.Component{
    constructor(props){
      super(props);
      this.layThongTin = this.layThongTin.bind(this);
      this.state = {
        tongHocVien: this.props.tongHocVien
      }
    }
    addStudent(){
      this.state.tongHocVien = parseInt(this.state.tongHocVien) + 1;
      this.setState(this.state);
    }
    layThongTin(){
      alert(this.props.children);
    }


    render(){
      return(
        <div>
       <h1 className="mauvang">{this.props.ten} - {this.props.giangvien}</h1>
       <div>So hoc vien: {this.state.tongHocVien}</div>
       <p>{this.props.children}</p>
       <button onClick={()=>{var str = this.props.ten + ' ' + this.props.giangvien; getName(str)}}>Thong Tin</button>
       <button onClick={()=>{this.addStudent()}}>Them hoc vien</button>
       </div>
     );
    }
  }

class KhoaHoc extends React.Component{
      render(){
        return(
          <div>
         <h3> ReactJS </h3>
         </div>
       );
      }
    }
class InputTag extends React.Component{
      show(){
        var text = this.refs.s1.value;
        alert(text);
      }
      render(){
        return(
         <div>
            <select ref="s1">
              <option value="a">AAA</option>
              <option value="b">BBB</option>
              <option value="c">CCC</option>
            </select>
            <input type="text" ref="txt"/>
            <button onClick={() => {this.show()}}>Hien thi</button>
         </div>
         );
        }
      }



ReactDOM.render(
  <div>
    <InputTag />
    <VanHieu ten="ReactJS" giangvien="Mr.Hai" tongHocVien="10">Mon hoc ReactJS</VanHieu>
    <VanHieu ten="NodeJS" giangvien="Mr.Hieu" tongHocVien="20">Mon hoc NodeJS</VanHieu>
  </div>
  , document.getElementById("root") );
