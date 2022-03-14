/*function*/

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

/*Component*/
function Clock(props) {
    React.useEffect(() => {
        tick();
    }, []);

    const [date, setDate] = React.useState(new Date());

    const tick = () => {
        setInterval(() => {
            setDate(new Date())
        }, 5000)
    }

    return (
        <div>
            <h1>Hello world</h1>
            <h2>Il est {date.toLocaleTimeString()}.</h2>
        </div>
    );
}
ReactDOM.render(<Clock/>, document.querySelector('#content'));



class FirstName extends React.Component {
    props;
    constructor(props) {
        super(props);
    }
    render() {
        return <span className="red"> {capitalize(this.props.text)} </span>
    }
}
class LastName extends  React.Component {
    props;
    constructor(props) {
        super(props);
    }
    render() {
        return <span className="blue"> {this.props.text.toUpperCase()} </span>
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