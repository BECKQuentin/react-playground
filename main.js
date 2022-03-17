//
//
// // -------------------------------------------
// // Étape 1 => On modifie le composant input
// // -------------------------------------------
//
// /* class NameForm extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {value: ''};
//
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
//
//     handleChange(event) {
//       this.setState({value: event.target.value});
//     }
//
//     handleSubmit(event) {
//       alert('Le nom a été soumis : ' + this.state.value);
//       event.preventDefault();
//     }
//
//     render() {
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Nom :
//             <input type="text" value={this.state.value} onChange={this.handleChange} />
//           </label>
//           <input type="submit" value="Envoyer" />
//         </form>
//       );
//     }
//   }
//  */
//
//
// function NameForm(props) {
//     const [name, setName] = React.useState('');
//
//     const handleChange = (e) => {
//         e.preventDefault();
//         setName(e.target.value);
//     }
//
//     const handleSubmit = (e) => {
//         e.preventDefault()
//         console.log(`Le nom a été soumis: ${name}`);
//     }
//
//
//
//     return(
//     <form onSubmit={handleSubmit}>
//         <label>
//         Nom :
//         <input type="text" value={name} onChange={handleChange} />
//         </label>
//         <input type="submit" value="Envoyer" />
//     </form>
// );
// }
//
//
//
// // ReactDOM.render(<NameForm />, document.querySelector('#app'));
//
//
//
//
//
//
// // -------------------------------------------
// // Étape 2 => On modifie le composant textarea
// // -------------------------------------------
//
//
//
// /* class EssayForm extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         value: 'Écrivez un essai à propos de votre élément du DOM préféré'
//       };
//
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
//
//     handleChange(event) {
//       this.setState({value: event.target.value});
//     }
//
//     handleSubmit(event) {
//       alert('Un essai a été envoyé : ' + this.state.value);
//       event.preventDefault();
//     }
//
//     render() {
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Essay:
//             <textarea value={this.state.value} onChange={this.handleChange} />
//           </label>
//           <input type="submit" value="Envoyer" />
//         </form>
//       );
//     }
//   } */
//
// // function EssayForm(props) {
// //     const [text, setText] = React.useState('Écrivez un essai à propos de votre élément du DOM préféré');
// //
// //     const handleChange = (e) => {
// //         e.preventDefault();
// //         setText(e.target.value);
// //     }
// //
// //     const handleSubmit = (e) => {
// //         e.preventDefault();
// //         console.log(`Le texte a été soumis: ${text}`);
// //     }
// //
// //     return(
// //         <form onSubmit={handleSubmit}>
// //           <label>
// //             Essay:
// //             <textarea rows={5} cols={35} value={text} onChange={handleChange} />
// //           </label>
// //           <input type="submit" value="Envoyer" />
// //         </form>
// //       )
// //   }
//
//
//
// //   ReactDOM.render(<EssayForm />, document.querySelector('#app'));
//
//
//
//
//
// // -------------------------------------------
// // Étape 3 => On modifie le composant select
// // -------------------------------------------
//
// /* class FlavorForm extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {value: 'coconut'};
//
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
//
//     handleChange(event) {
//       this.setState({value: event.target.value});
//     }
//
//     handleSubmit(event) {
//       alert('Votre parfum favori est : ' + this.state.value);
//       event.preventDefault();
//     }
//
//     render() {
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Choisissez votre parfum favori :
//             <select value={this.state.value} onChange={this.handleChange}>
//               <option value="grapefruit">Pamplemousse</option>
//               <option value="lime">Citron vert</option>
//               <option value="coconut">Noix de coco</option>
//               <option value="mango">Mangue</option>
//             </select>
//           </label>
//           <input type="submit" value="Envoyer" />
//         </form>
//       );
//     }
//   } */
//
// function FlavorForm(props) {
//     const [value, setValue] = React.useState('coconut');
//     const handleChange = (e) => {
//         e.preventDefault();
//         setValue(e.target.value)
//
//     }
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(`la valeur sélectionnée est: ${value}`);
//     }
//
//     return(
//         <form onSubmit={handleSubmit}>
//           <label>
//             Choisissez votre parfum favori :
//             <select value={value} onChange={handleChange}>
//               <option value="grapefruit">Pamplemousse</option>
//               <option value="lime">Citron vert</option>
//               <option value="coconut">Noix de coco</option>
//               <option value="mango">Mangue</option>
//             </select>
//           </label>
//           <input type="submit" value="Envoyer" />
//         </form>
//     );
// }
//
//
//
// //ReactDOM.render(<FlavorForm/>, document.querySelector('#app'));
//
//
//
//
// function MultiForm(props) {
//     const [inputs, setInputs] = React.useState({
//         name: '',
//         text: '',
//         value: "coconut"
//     });
//
//
//
// /*
//
//     // useCallback n'est pas forcément le meilleur choix ici
//
//
//     const handleChange = React.useCallback(
//         ({target: {name, value}}) => {
//             setInputs(state => ({...state, [name]: value}), []);
//             console.log(inputs);
//         },
//         [inputs]
//     )
//
//  */
//
//
//     const handleChange = ({target: {name, value}}) => {
//         setInputs(state => ({...state, [name]: value}), []);
//     }
//
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         for(const name in inputs) {
//             console.log(`${name}: ${inputs[name]}`)
//         }
//     }
//
//
//     return(
//         <form onSubmit={handleSubmit}>
//             <label>
//                 Nom :
//                 <input type="text" name="name" value={inputs.name} onChange={handleChange} />
//             </label>
//
//             <label>
//                 Essay:
//                 <textarea name="text" value={inputs.text} onChange={handleChange} />
//             </label>
//
//             <label>
//                 Choisissez votre parfum favori :
//                 <select name="value" value={inputs.value} onChange={handleChange}>
//                     <option value="grapefruit">Pamplemousse</option>
//                     <option value="lime">Citron vert</option>
//                     <option value="coconut">Noix de coco</option>
//                     <option value="mango">Mangue</option>
//                 </select>
//             </label>
//
//             <input type="submit" value="Envoyer" />
//         </form>
//     )
// }
//
// ReactDOM.render(<MultiForm />, document.querySelector('#app'))
//
// ;
//////////////////////////////////////////////////////////////////////////////
function App(props) {
    const [base, setBase] = React.useState();
    const [inputFloat, setInputFloat] = React.useState();
    const [inputBinary, setInputBinary] = React.useState();

    const handleChange = () => {
        if( base == 'float') {
            let float = parseInt(inputFloat)
            setInputBinary(float.toString(2))
        } else if ( base == 'binary' ) {
            setInputFloat(parseInt(inputBinary,2))
        }
    }
    // React.useEffect(() => {
    //     return () => {
    //         console.log('floatchange')
    //     };
    // }, [inputFloat]);

    return(
        <React.Fragment>
            <BaseNumberInput
                base={"float"}
                text={"Décimal"}
                number={inputFloat}
                onChangeBase={handleChange} />
            <BaseNumberInput
                base={"binary"}
                text={"Binaire"}
                number={inputBinary}
                onChangeBase={handleChange} />
        </React.Fragment>
    )
}

function BaseNumberInput({text, number, onChangeBase}) {

    // const handleChange = (base) => {
    //      console.log(base)
    // }

    return(
        <React.Fragment>
            <p>Base {text} </p>
            <input type="number" value={number} onChange={onChangeBase}/>
        </React.Fragment>
    )
}

//Binary
// function BaseNumberInput(props) {
//
//     const [inputBinary, setInputBinary] = React.useState();
//
//     // const handleChange = (e) => {
//     //
//     //     e.preventDefault();
//     //     let entryBinary = document.getElementById('entryBinary')
//     //     setInputBinary(entryBinary.value)
//     // }
//     // const handleSubmit = (e) => {
//     //     e.preventDefault()
//     //
//     //     //convertir entryBinary en Float
//     //     setInputFloat(parseInt(inputBinary,2))
//     //     let entryFloat = document.getElementById('entryFloat')
//     //     entryFloat.value = inputFloat
//     // }
//
//     // return(
//     //     <form>
//     //         <input id="entryBinary" type="number" onChange={handleChange}/>
//     //         <label for="entryBinary">Entrez un nombre (binaire)</label>
//     //         <input type="submit" value="Convertir" onClick={handleSubmit}/>
//     //     </form>
//     // )
//     return(
//         <React.Fragment>
//             <p>Base {text} </p>
//             <input id="entryBinary" type="number"/>
//             {/*<input value={number} onChange={handleChange} />*/}
//         </React.Fragment>
//     )
// }


ReactDOM.render(<App />, document.querySelector('#app'))



// function BaseNumberInput(props) {
//
//     const [inputFloat, setInputFloat] = React.useState();
//
//     const handleChange = (e) => {
//         e.preventDefault();
//         setInputFloat(e.target.value)
//         // props.onChange(e.target.value)
//     }
//     const handleSubmit = (e) => {
//         e.preventDefault()
//
//         //convertir entryFloat en Binaire
//
//     }
//
//     return(
//         <form>
//             <label for="entry">Entrez un nombre (décimal)</label>
//             <input id="entryFloat" type="number" onChangeBase={handleChange}/>
//         </form>
//     )
// }
// function BaseNumberInput(props) {
//     const [inputBinary, setInputBinary] = React.useState();
//
//     const handleChange = (e) => {
//
//         e.preventDefault();
//
//         setInputBinary(e.target.value)
//
//         // props.onChange(e.target.value)
//         console.log(inputBinary)
//     }
//     const handleSubmit = (e) => {
//         e.preventDefault()
//
//         //convertir entryBinary en Float
//         setInputFloat(parseInt(inputBinary,2))
//
//         entryFloat.value = inputFloat
//         // console.log(inputFloat)
//     }
//
//     return(
//         <form>
//             <input id="entryBinary" type="number" onChangeBase={handleChange}/>
//             <label for="entryBinary">Entrez un nombre (binaire)</label>
//         </form>
//     )
// }
// function Submit(props) {
//
//     return (<input type="submit" value="Convertir" onClick={handleSubmit}/>)
// }


