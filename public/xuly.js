class Welcome extends React.Component{
    constructor(props){
        super(props);
        this.handelClick= this.handelClick.bind(this);
        this.showfs= this.showfs.bind(this);
        this.update= this.update.bind(this);
        this.state={tongso:10, hocvien:parseInt(this.props.hocvien)};
    }
    showfs(){
        show(this.props.children);
    }
    update(){

        this.state.tongso +=1;
        this.state.hocvien += 1;
        this.setState(this.state);
    }

    handelClick(){
        show(this.props.children);
    }
    render(){
      return(
          <div>
              <h1 className="mauvang">{this.props.ten}</h1>
              <i><u>{this.props.children}</u></i>
              <br/>
              <i><u> day la state hoc vien: {this.state.tongso}</u></i>
              <br/>
              <i><u> day la prop hoc vien: {this.props.hocvien} sao khi thay doi {this.state.hocvien}</u></i>
              <Con></Con>
              <input type="button" onClick={()=>{show(this.props.children)}} value="lay thong tin"/>
              <input type="button" onClick={this.update} value="them hoc vien"/>
          </div>

          );
    }

}
function show(name) {
    alert(name);
}
class Con extends React.Component{
    render(){
        return(
            <div>
            <h3>{this.props.con}</h3>
            </div>
        );
    }
}
class Reftext extends React.Component{
    constructor(props) {
        super(props);
        this.show = this.show.bind(this);
    }
    show(){
        var text= this.refs.txt.value;
        alert(text);
    }
    render(){
        return(
            <div>
                <input type="text" ref='txt' />
                <input type="button" onClick={this.show} value="show"/>
            </div>
        );
    }

}

ReactDOM.render(
    <div>
        <Reftext></Reftext>
        <Welcome ten="day la bien ten" hocvien="30">day la children</Welcome>
    </div>
,document.getElementById('root'));