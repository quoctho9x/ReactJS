class Welcome extends React.Component{
    render(){
      return(
          <div>
              <h1 className="mauvang">quoctho new</h1>
                <Con></Con>
          </div>

          );
    }

}

class Con extends React.Component{
    render(){
        return(
            <div>
            <h3>quoctho con</h3>
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <Welcome />
    </div>
,document.getElementById('root'));