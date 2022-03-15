// function UserGreeting(props) {
//     return <h1>Bienvenue !</h1>;
//   }
//
//   function GuestGreeting(props) {
//     return <h1>Veuillez vous connecter</h1>;
//   }
//   function Greeting(props) {
//       const [isLoggedIn, setIsLoggedIn] = React.useState(false);
//
//       const handleLogIn = (e) => {
//           e.preventDefault();
//           setIsLoggedIn(true);
//       }
//
//       const handleLogOut = (e) => {
//           e.preventDefault();
//           setIsLoggedIn(false);
//       }
//
//       React.useEffect(() => {
//           console.log('updated', isLoggedIn)
//       }, [isLoggedIn])
//
//     return(
//         <React.Fragment>
//             {isLoggedIn ?
//             <React.Fragment>
//                 <UserGreeting />
//                 <button onClick={handleLogOut}>Se déconnecter</button>
//             </React.Fragment> :
//             <React.Fragment>
//                 <GuestGreeting />
//                 <button onClick={handleLogIn}>Se connecter</button>
//             </React.Fragment> }
//         </React.Fragment>
//     )
//   }
//
//   ReactDOM.render(
//     <Greeting />,
//     document.querySelector('#app')
//   );

//////////////////////////////////////////////

// const numbers = [1, 2, 3, 4, 5];
// // En itérant sur le tableau on retourne un élement <li> pour chacune des entrées
// // et on assigne ses élements à la variables listItems
// const listItems = numbers.map((number) =>
//
//     /*⚠ On évitera d'utliser les index comme clé si l'ordre des éléments est susceptible de changer ⚠*/
//     <li key={number.toString()}>{number}</li>
//
// );

function FetchUser (props) {

    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            // .then(json => console.log(json))
            .then(usersObject => setUsers(usersObject))
    }, [])

    const [users, setUsers] = React.useState([]);

    const arrUser = [{
        id: 1,
        name: 'Robert',
        age: 27,
    },
    {
        id: 2,
        name: 'Jacques',
        age: 33
    }]

    const arrItems = users.map((user) =>
        <li key={user.id}>
            <div className="card">
                <img className="card-img-top" src="..." alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{user.name} {user.username}</h5>
                    <p className="card-text">{user.email}</p>
                    {/*<p className="card-text">{user.address}</p>*/}
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </li>
    );

    return(
        <React.Fragment>
            {arrItems}
        </React.Fragment>
    )
}

function Card(props) {

    return(
    <React.Fragment>
        <div className="card" style="width: 18rem;">
            <img className="card-img-top" src="..." alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{user.name} {user.username}</h5>
                <p className="card-text">{user.email}</p>
                <p className="card-text">{user.address}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </React.Fragment>)
}

//Puis on peut rendre nos élements comme ceci
ReactDOM.render(
    <ul className="d-flex flex-wrap"><FetchUser /></ul>,
    // <li key={number.toString()}>{number}</li>
    document.querySelector('#app')
);


