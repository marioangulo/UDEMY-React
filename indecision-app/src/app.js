console.log("App.js is running!");

// JSX - Javascript XML
var template = (
    <div>
        <h1>Indecision App</h1> 
        <p>This is some info</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

var templateTwo = (
    <div>
        <h1>Mario Angulo</h1>
        <p>Age: 30</p>
        <p>Location: Seattle</p>
    </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);