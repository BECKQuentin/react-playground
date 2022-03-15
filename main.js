// function UserGreeting(props) {
//     return <h1>Bienvenue !</h1>;
// }
// function GuestGreeting(props) {
//     return <h1>Veuillez vous inscrire .</h1>;
// }
// function ConnexionButton(props) {
//    return <button onClick={connexion}>Connecter</button>;
// }
// function Connexion(props) {
//     React.useEffect(() => {
//
//     }, []);
//     const [isLoggedIn, setIsLoggedIn] = useIsLoggedIn(true);
//     console.log(isLoggedIn)
// }
// function Greeting(props) {
//     const isLoggedIn = checked.isLoggedIn;
//     return isLoggedIn ? <UserGreeting /> : <GuestGreeting/>;
// }
//
// ReactDOM.render(
//     <ConnexionButton />,
//     document.getElementById('connexion')
// )
//
// ReactDOM.render(
//     // Essayez de changer ça vers isLoggedIn={true} :
//     <Greeting />,
//     document.getElementById('greeting')
// );
//
// function Mailbox(props) {
//     // Ici nous pourrions destructurer la prop pour éviter de passer par une variable tampon
//     /* function Mailbox({unreadMessages}) {
//         // Et nous aurions directement accès à unreadMessages
//     }*/
//     const unreadMessages = props.unreadMessages;
//     return (
//         <div>
//             <h1>Bonjour !</h1>
//             {unreadMessages.length > 0 &&
//                 <h2>
//                     Vous avez {unreadMessages.length} message(s) non-lu(s).
//                 </h2>
//             }
//         </div>
//     );
// }
//
// const messages = ['React', 'Re: React', 'Re:Re: React'];
// ReactDOM.render(
//     <Mailbox unreadMessages={messages} />,
//     document.getElementById('root')
// );
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// function Clock(props) {
//     React.useEffect(() => {
//         tick();
//     }, []);
//
//     const [date, setDate] = React.useState(new Date());
//     const [textColor, setTextColor] = React.useState("black");
//     const intervalRef = React.useRef();
//     const tick = () => {
//         intervalRef.current = setInterval(() => {
//             setDate(new Date());
//         }, 1000)
//
//     }
//
//     const changeColor = () => {
//         var randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
//         setTextColor(randomColor);
//     }
//
//     const resetColor = () => {
//         setTextColor('black')
//     }
//
//     const stopClock = (e) => {
//         e.preventDefault();
//         clearInterval(intervalRef.current);
//     }
//
//     const restartClock = (e) => {
//         e.preventDefault();
//         tick();
//     }
//
//
// /*     return (
//         <div>
//             <h1>Hello world</h1>
//             <h2 style={{color: textColor}}>Il est {date.toLocaleTimeString()}.</h2>
//             <button onClick={changeColor}>Changer couleur</button>
//             <button onClick={resetColor}>Réinitialiser couleur</button>
//         </div>
//         ); */
//
//         // Solution Bonus
//
//         return (
//             <div>
//                 <h1>Hello world</h1>
//                 <h2 style={{color: textColor}}>Il est {date.toLocaleTimeString()}.</h2>
//                 <button onClick={stopClock}>Stop</button>
//                 <button onClick={restartClock}>Reprendre</button>
//             </div>
//             );
//            }
//
// ReactDOM.render(<Clock />, document.querySelector('#app'));

////////////////////////////////////
class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isLoggedIn: true};

        // Cette liaison est nécéssaire afin de permettre
        // l'utilisation de `this` dans la fonction de rappel.
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isLoggedIn: !state.isLoggedIn
        }));
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    {this.state.isLoggedIn ? <GuestGreeting/> : <UserGreeting />}
                </div>

                <button onClick={this.handleClick}>
                    {this.state.isLoggedIn ? 'Connecter' : 'Déconnecter'}
                </button>
            </React.Fragment>
        );
    }
}
class Connect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isConnect}
    }
}
function UserGreeting(props) {
    return <h1>Bienvenue !</h1>;
}
function GuestGreeting(props) {
    return <h1>Veuillez vous inscrire.</h1>;
}
function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    return isLoggedIn ? <GuestGreeting/> : <UserGreeting />;
}

ReactDOM.render(
    <Toggle />,
    document.getElementById('connexion')
);

// ReactDOM.render(
//     <Greeting isLoggedIn={false} />,
//     document.getElementById('root')
// );
////////////////////////////////////////////////////////////////////////////////////
// function UserGreeting(props) {
//     return <h1>Bienvenue !</h1>;
// }
//
// function GuestGreeting(props) {
//     return <h1>Veuillez vous connecter</h1>;
// }
// function Greeting(props) {
//     const [isLoggedIn, setIsLoggedIn] = React.useState(false);
//
//     const handleLogIn = (e) => {
//         e.preventDefault();
//         setIsLoggedIn(true);
//     }
//
//     const handleLogOut = (e) => {
//         e.preventDefault();
//         setIsLoggedIn(false);
//     }
//
//     return(
//         <React.Fragment>
//             {isLoggedIn ?
//                 <React.Fragment>
//                     <UserGreeting />
//                     <button onClick={handleLogOut}>Se déconnecter</button>
//                 </React.Fragment> :
//                 <React.Fragment>
//                     <GuestGreeting />
//                     <button onClick={handleLogIn}>Se connecter</button>
//                 </React.Fragment> }
//         </React.Fragment>
//     )
// }
//
// ReactDOM.render(
//     <Greeting />,
//     document.querySelector('#app')
// );
