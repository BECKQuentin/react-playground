/* 
// Étape 1
class Clock extends React.Component {
    render() {
      return (
        <div>
          <h1>Bonjour, monde !</h1>
          <h2>Il est {this.props.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }

ReactDOM.render(<Clock date={new Date()}/>, document.querySelector('#app')); 

*/


/* 

// Étape 2

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date()};
    }
  render() {
    return (
      <div>
        <h1>Bonjour, monde !</h1>
        <h2>Il est {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(<Clock />, document.querySelector('#app')); 


 */



// Étape 3

/* class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date()};
    }
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(),1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
        <div>
            <h1>Bonjour, monde !</h1>
            <h2>Il est {this.state.date.toLocaleTimeString()}.</h2>
        </div>
        );
    }
}

ReactDOM.render(<Clock />, document.querySelector('#app'));  */
class Color extends React.Component {
    constructor(props) {
        super(props);
    }

}



function Clock(props) {
    React.useEffect(() => {
        tick();
    }, []);
    
    let [date, setDate] = React.useState(new Date());
    let [color, setColor] = React.useState(new Color());

    const tick = () => {
        setInterval(() => {
            setDate(new Date())
        }, 1000)
    }
    const changeColor = () => {
        var randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        setTextColor(randomColor);
    }
    const rebootColor = () => {
       setColor('black')
    }
    return (
        <div>
            <h1>Hello world</h1>
            <h2>Il est <span style={{color: color}}>{date.toLocaleTimeString()}.</span></h2>
            <input type='color'></input>
            <button onClick={rebootColor}>Réinitialiser</button>
        </div>
        );
}

ReactDOM.render(<Clock />, document.querySelector('#app'));





