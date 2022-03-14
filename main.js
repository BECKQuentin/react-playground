// import * as ReactDOM from "react-dom";
const lastName = 'beck'
const firstName = 'quentin'

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

const contact =
    <div>
        Bonjour, je m'appelles
        <span className="red"> {lastName.toUpperCase()} </span>
        <span>{capitalize(firstName)}</span>
    </div>

// const contactTitleElement = React.createElement(
//
// )

const title = React.createElement(
    'h1',
    {
        className:'fs-1'
    },
    'Hello world', contact
)
let content = document.getElementById('content')
// let contactTitle = document.getElementById('contact_title')

ReactDOM.render(title, content)
// ReactDOM.render(contactTitleElement, contactTitle)

console.log(contact)

// Créer une fonction qui va nous permettre de retourner nos Strings dans le format souhaité