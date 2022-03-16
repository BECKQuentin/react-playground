// function App(props) {
//     React.useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response => response.json())
//         .then(usersObject => setUsers(usersObject))
//     }, [])
//
//     const [users, setUsers] = React.useState([]);
//
//
//
//     return(
//         <React.Fragment>
//         {
//             users.map((u) =>(
//                 <UserCard key={u.id} user={u}/>
//             ))
//         }
//         </React.Fragment>
//     )
// }
//
// function UserCard({user}) {
//
//
//     return (
//         <ul className="user-card">
//             <li>{user.name}</li>
//             <li>{user.email}</li>
//             <li>{user.company.name}</li>
//             <li>{user.phone}</li>
//             <li>{user.website}</li>
//         </ul>
//     )
// }
//
// ReactDOM.render(<App/>, document.querySelector('#app'))

// class NameForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {value: ''};
//
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//
//     handleChange(event) {
//         this.setState({value: event.target.value});
//     }
//
//     handleSubmit(event) {
//         alert('Le nom a été soumis : ' + this.state.value);
//         event.preventDefault();
//     }
//
//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label>
//                     Nom :
//                     <input type="text" value={this.state.value} onChange={this.handleChange} />
//                 </label>
//                 <input type="submit" value="Envoyer" />
//             </form>
//         );
//     }
// }

// function NameForm(props) {
//
//     const [name, setName] = React.useState('')
//
//     function handleChange(e)
//     {
//         e.preventDefault();
//         setName(e.target.value);
//     }
//     function handleSubmit(e)
//     {
//         alert('Le nom a été soumis : ' + name);
//         event.preventDefault();
//     }
//
//     return (
//         <form onSubmit={handleSubmit}>
//             <label>
//                 Nom :
//                 <input type="text" value={name} onChange={handleChange}/>
//             </label>
//             <input type="submit" value="Envoyer" />
//         </form>
//     );
// }
//
// function EssayForm(props) {
//
//     const [essay, setEssay] = React.useState('Écrivez un essai à propos de votre élément du DOM préféré')
//
//     function handleChange(e)
//     {
//         e.preventDefault();
//         setEssay(e.target.value);
//     }
//     function handleSubmit(e)
//     {
//         alert('Un essai a été envoyé : ' + name);
//         e.preventDefault();
//     }
//
//     return(
//         <form onSubmit={handleSubmit}>
//             <label>
//                 Essay:
//                 <textarea rows={5} cols={35} value={essay} onChange={handleChange} />
//             </label>
//             <input type="submit" value="Envoyer" />
//         </form>
//     )
// }
//
// function FlavorForm(props) {
//
//     // let opt1 = document.getElementById("opt1")
//
//     const [flavor, setFlavor] = React.useState()
//
//     function handleChange(e)
//     {
//         setFlavor(e.target.value)
//     }
//
//     function handleSubmit(e)
//     {
//         e.preventDefault();
//         if(flavor == 'default') return
//
//         alert('Votre parfum favori est : ' + flavor);
//     }
//
//     return (
//         <form onSubmit={handleSubmit}>
//             <label>
//                 Choisissez votre parfum favori :
//                 <select value={flavor} onChange={handleChange} required={true}>
//                     <option value="" disabled>Choississez une Saveur</option>
//                     <option value="grapefruit">Pamplemousse</option>
//                     <option value="lime">Citron vert</option>
//                     <option value="coconut">Noix de coco</option>
//                     <option value="mango">Mangue</option>
//                 </select>
//             </label>
//             <input type="submit" value="Envoyer" />
//         </form>
//     );
// }

function Form(props)
{
    const [name, setName] = React.useState('')
    const [essay, setEssay] = React.useState('Écrivez un essai à propos de votre élément du DOM préféré')
    const [flavor, setFlavor] = React.useState('coconut')

    function handleChange(e)
    {
        const target = e.target;
        console.log(e)
        if ( target.type === 'text') {
            setName(target.value);
        } else if (target.type === "textarea") {
            setEssay(target.value);
        } else if (target.type === "select") {
            setFlavor(target.value)
        }
    }

    function handleSubmit(e)
    {
        e.preventDefault();
        if(flavor == 'default') return
        alert('Le nom a été soumis : ' + name );
        alert('Un essai a été envoyé : ' + essay);
        alert('Votre parfum favori est : ' + flavor);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nom :
                <input type="text" value={name} onChange={handleChange}/>
            </label>
            <hr/>
            <label>
                Essay:
                <textarea rows={5} cols={35} value={essay} onChange={handleChange} />
            </label>
            <hr/>
            <label>
                Choisissez votre parfum favori :
                <select value={flavor} onChange={handleChange} required={true}>
                    <option value="" disabled>Choississez une Saveur</option>
                    <option value="grapefruit">Pamplemousse</option>
                    <option value="lime">Citron vert</option>
                    <option value="coconut">Noix de coco</option>
                    <option value="mango">Mangue</option>
                </select>
            </label>
            <input type="submit" value="Envoyer" />
        </form>
    );
}

// ReactDOM.render(<NameForm/>, document.querySelector('#app'))
// ReactDOM.render(<EssayForm/>, document.querySelector('#app'))
// ReactDOM.render(<FlavorForm />, document.querySelector('#app'))
ReactDOM.render(<Form />, document.querySelector('#app'))