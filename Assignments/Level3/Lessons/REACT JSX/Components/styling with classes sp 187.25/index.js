
function Header() {
    return ( //loads the logo and nav menu.
        <header>
            <nav className="nav">
                <img src="./IMGS/react.png" className="nav-logo" />

                <ul className="nav-items">
                    <li>About</li>
                    <li>Content</li>
                    <li>Pricing</li>
                </ul>
            </nav>
        </header>
    )
}

function MainContent() {
        return (
        <div>
            <h1>I am excited to learn React!</h1>
            <ul>
                <li>Learning React is an employable skill as a developer.</li>
                <li>React is a popular library to know in web development.</li>
            </ul>
        </div>
        )
}

function Page() {
    return(
        <div>
            <Header />            
            <MainContent />
            <Footer />
        </div>
    );
}

function Footer(className="footer") {
    return (
        <footer>
            <small>© 2023 Arnold Jones. All rights reserved.</small>
        </footer>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))
