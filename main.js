function UserGreeting(props) {
    return <h1>Bienvenue !</h1>;
}
function GuestGreeting(props) {
    return <h1>Veuillez vous inscrire.</h1>;
}
function ConnexionButton(props) {
   return <button>Connecter</button>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    return isLoggedIn ? <UserGreeting /> : <GuestGreeting/>
}
ReactDOM.render(
    <ConnexionButton />,
    document.getElementById('root')
)

ReactDOM.render(
    // Essayez de changer ça vers isLoggedIn={true} :
    <Greeting isLoggedIn={false} />,
    document.getElementById('root')
);

function Mailbox(props) {
    // Ici nous pourrions destructurer la prop pour éviter de passer par une variable tampon
    /* function Mailbox({unreadMessages}) {
        // Et nous aurions directement accès à unreadMessages
    }*/
    const unreadMessages = props.unreadMessages;
    return (
        <div>
            <h1>Bonjour !</h1>
            {unreadMessages.length > 0 &&
                <h2>
                    Vous avez {unreadMessages.length} message(s) non-lu(s).
                </h2>
            }
        </div>
    );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];
ReactDOM.render(
    <Mailbox unreadMessages={messages} />,
    document.getElementById('root')
);





























function Clock(props) {
    React.useEffect(() => {
        tick();
    }, []);
    
    const [date, setDate] = React.useState(new Date());
    const [textColor, setTextColor] = React.useState("black");
    const intervalRef = React.useRef();
    const tick = () => {
        intervalRef.current = setInterval(() => {
            setDate(new Date());
        }, 1000)
        
    }

    const changeColor = () => {
        var randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`; 
        setTextColor(randomColor);
    }

    const resetColor = () => {
        setTextColor('black')
    }

    const stopClock = (e) => {
        e.preventDefault();
        clearInterval(intervalRef.current);
    }

    const restartClock = (e) => {
        e.preventDefault();
        tick();
    }
    

/*     return (
        <div>
            <h1>Hello world</h1>
            <h2 style={{color: textColor}}>Il est {date.toLocaleTimeString()}.</h2>
            <button onClick={changeColor}>Changer couleur</button>
            <button onClick={resetColor}>Réinitialiser couleur</button>
        </div>
        ); */

        // Solution Bonus

        return (
            <div>
                <h1>Hello world</h1>
                <h2 style={{color: textColor}}>Il est {date.toLocaleTimeString()}.</h2>
                <button onClick={stopClock}>Stop</button>
                <button onClick={restartClock}>Reprendre</button>
            </div>
            );
}

ReactDOM.render(<Clock />, document.querySelector('#app'));





