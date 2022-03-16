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

function NameForm(props) {

    const [name, setName] = React.useState('')

    function handleChange(e)
    {
        e.preventDefault();
        setName(e.target.value);
    }
    function handleSubmit(e)
    {
        console.log(e.target.value)
        alert('Le nom a été soumis : ' + e.target.value);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nom :
                <input type="text" value={name} onChange={handleChange}/>
            </label>
            <input type="submit" value="Envoyer" />
        </form>
    );
}

ReactDOM.render(<NameForm/>, document.querySelector('#app'))