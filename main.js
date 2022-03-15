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



const numbers = [1, 2, 3, 4, 5];
// En itérant sur le tableau on retourne un élement <li> pour chacune des entrées
// et on assigne ses élements à la variables listItems
const listItems = numbers.map((number) =>

    /*⚠ On évitera d'utliser les index comme clé si l'ordre des éléments est susceptible de changer ⚠*/
    <li key={number.toString()}>{number}</li>

);

function fetchUser () {
    let user = ''
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
    return user
}
console.log(fetchUser())

//Puis on peut rendre nos élements comme ceci
ReactDOM.render(
    <ul>{listItems}</ul>,
    document.querySelector('#app')
);


