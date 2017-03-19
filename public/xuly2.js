class Change extends React.Component{
    constructor(props){
        super(props);
        this.state={
            array :[
                {name:'quoctho',address:'binh chanh',phone:'01223554'},
                {name:'quoctho1',address:'binh chanh1',phone:'01223554'},
                {name:'quoctho2',address:'binh chanh2',phone:'01223554'},
                {name:'quoctho3',address:'binh chanh3',phone:'01223554'}
                ]
            ,bien:'none',i:0};
        this.add = this.add.bind(this);
    }
    add(){
        var moi = 'none';
        moi = this.refs.txt.value;
        this.state.array.push(moi);
        this.setState(this.state);
    }

    render(){
        return(
            <div>

                <input ref="txt" ></input>
                <button onClick={this.add}>add</button>
                {
                    this.state.array.map(function (node,index) {
                        return (
                            <Node key={index} name={node.name} address={node.address} phone={node.phone}></Node>
                        )
                    })
                }

            </div>
        )
    }
}
class Node extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <h3 >Ho ten: {this.props.name} </h3>
                <p>dia chi {this.props.address}</p>
                <p>so dien thoai {this.props.phone}</p>
            </div>
        )
    }
}

ReactDOM.render(
    <div>
        <Change></Change>
    </div>
    ,document.getElementById('root'));