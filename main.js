/*function*/
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

/*Composant*/
class FirstName extends ReactComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return <span className="red"> {props.toUpperCase()} </span>
    }
}
class LastName extends  ReactComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return <span className="blue"> {capitalize(firstName)} </span>
    }
}

/*data*/
const lastName = 'beck'
const firstName = 'quentin'

const contact =
    <div>
        Bonjour, je m'appelles
        {LastName(lastName)}
        {FirstName(firstName)}
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