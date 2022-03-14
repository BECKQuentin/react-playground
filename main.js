import * as ReactDOM from "react-dom";

const name = 'Quentin BECK'
const contact =  <h1>Bonjour, je m\'appelles {name}</h1>

const contactTitleElement = React.createElement(
    contact,{}, name
)

const title = React.createElement(
    'h1',
    {
        className:'fs-1'
    },
    'Hello world'
)
let content = document.getElementById('content')
let contactTitle = document.getElementById('contact_title')

ReactDOM.render(title, content)
ReactDOM.render(contactTitleElement, contactTitle)

console.log(title)

// Créer une fonction qui va nous permettre de retourner nos Strings dans le format souhaité