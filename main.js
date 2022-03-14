/*function*/
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

function tick() {
    const element = (
        <div>
            <h1>Hello World !</h1>
            <h2>Il est {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
}
// Chaque seconde, nous appellons ReactDOM.render() depuis un callback passé à setInterval().
setInterval(tick, 1000);
function Clock(props) {
    return (
        <div>
            <h1>Bonjour, monde !</h1>
            <h2>Il est {props.date.toLocaleTimeString()}.</h2>
        </div>
    );
}

function tick() {
    ReactDOM.render(
        <Clock date={new Date()} />,
        document.getElementById('root')
    );
}
setInterval(tick, 1000);







/*Component*/
class Tick extends React.Component {
    props;
    constructor(props) {
        super(props);
    }
    render() {
        return <div>
            <h1>Hello World !</h1>
            <h2>Il est {new Date().toLocaleTimeString()}.</h2>
        </div>
    }
}

class FirstName extends React.Component {
    props;
    constructor(props) {
        super(props);
    }
    render() {
        return <span className="red"> {this.props.text.toUpperCase()} </span>
    }
}
class LastName extends  React.Component {
    props;
    constructor(props) {
        super(props);
    }
    render() {
        return <span className="blue"> {capitalize(this.props.text)} </span>
    }
}


/*data*/
const lastName = 'beck'
const firstName = 'quentin'

const contact =
    <div>
        Bonjour, je m'appelles
        <FirstName text={firstName}/>
        <LastName text={lastName}/>
    </div>

/*React*/
const title = React.createElement(
    'h1',
    {
        className:'fs-1'
    },
    'Hello world', contact
)
let content = document.getElementById('content')

ReactDOM.render(title, content)

console.log(contact)

// Créer une fonction qui va nous permettre de retourner nos Strings dans le format souhaité