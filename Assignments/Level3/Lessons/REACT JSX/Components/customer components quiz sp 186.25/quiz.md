Quiz!

1. What is a React component?
We write a function in the js file that returns React elements.  This is related to UI (the User Interface or how the content is being displayed.) 

2. What's wrong with this code?
```
function MyComponent() {        **we us pascal case instead of camel case --which is capitalizing each of the words in the name from myComponent to MyComponent -- for function naming.**
    return (
        <small>I'm tiny text!</small>
    )
}
```

3. What's wrong with this code?
```
function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

ReactDOM.render(<Header>, document.getElementById("root)) **we use angle brackets and not () -- Header() to <Header>.**
```

ReactDOM.render(<Page />, document.getElementById("root"))