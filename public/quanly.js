var list;
class Node extends React.Component{
    constructor(props){
        super(props)
        this.state={onEdit:false}
        this.remove = this.remove.bind(this);
        this.edit = this.edit.bind(this);
        this.done = this.done.bind(this);
        this.cancel = this.cancel.bind(this);
    }
    remove(){
        $.post('/delete',{idXoa:this.props.id},function (data) {
            list.setState({array:data})
        })
    }
    edit(){
        this.state.onEdit = true;
        this.setState(this.state);
    }
    done(){
        var that = this;
        $.post('/update',{idSua:this.props.id, noiDung:this.refs.txt.value},function (data) {
            that.state.onEdit = false;
            list.state.array = data;
            that.setState(that.state)
            list.setState(list.state)
        })
    }
    cancel(){
        this.state.onEdit = false;
        this.setState(this.state);
    }
    render(){
        if(this.state.onEdit){
            return(
                <div className="node-child">
                    <input type="text" defaultValue={this.props.children} ref="txt"/>
                    <button onClick={this.done}>xong</button>
                    <button onClick={this.cancel}>huy</button>
                </div>
            )
        }
        else {
            return(
                <div className="node-child">
                    <p>{this.props.children}</p>
                    <button onClick={this.remove}>Xoa</button>
                    <button onClick={this.edit}>sua</button>
                </div>
            )
        }

    }
}
class Input extends React.Component{
    constructor(props){
        super(props)
        this.Addmoi = this.Addmoi.bind(this);
    }
    Addmoi(){
        $.post('/add',{node:this.refs.demo.value},function (data) {
            list.setState({array:data})
        })

        ReactDOM.unmountComponentAtNode(document.getElementById('Add-node'))
    }
    render(){
        return(
            <div className="input-div">
                <input type="text" ref="demo" placeholder="nhap vao di"/>
                <button onClick={this.Addmoi}>send</button>
            </div>
        )
    }
}
class Add extends React.Component{
    constructor(props){
        super(props)
        this.add = this.add.bind(this);
    }
    add(){
       ReactDOM.render(
           <Input/>,document.getElementById('Add-node')
       )
    }
    render(){
        return(
            <div className="add">
                <button onClick={this.add}>Them </button>
            </div>
        )
    }
}
class List extends React.Component{
    constructor(props){
        super(props)
        this.state={array:[]}
        this.componentDidMount = this.componentDidMount.bind(this);
        list=this;
    }
    render(){
        return(
            <div className="node-list">
                {this.state.array.map(function(note,index){
                   return(<Node key={index} id={index}>{note}</Node>)
                    })
                }
                <div id="Add-node"></div>
            </div>
        )
    }
    componentDidMount(){
        var that = this;
        $.post('/getNodes',function (data) {
            that.state.array = data;
            that.setState(that.state);
        })
    };
}

ReactDOM.render(
    <div>
       <List/>
       <Add/>
    </div>
    ,document.getElementById('root'));