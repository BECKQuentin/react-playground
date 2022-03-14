

const title = React.createElement(
    'h1',
    {
        className:'fs-1'
    },
    'Hello world'
)
let content = document.getElementById('content')
ReactDOM.render(title, content)

console.log(title)