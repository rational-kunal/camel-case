import React from 'react';
import NavBar from "./component/NavBar";
import Blog from "./component/Blog";
import BlogList from "./component/BlogList";

const brandName = "camel_case";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            blogMeta : undefined
        }
    }

    render() {
        return (
            <div className="App">

                <NavBar
                    brandName={ brandName }
                    onChange={ x=>this.setState({ blogMeta: undefined }) }
                />

                { this.state.blogMeta ?
                    <Blog
                        title={ this.state.blogMeta.title }
                        keywords={ this.state.blogMeta.keywords }
                        url={ this.state.blogMeta.url }
                    /> :
                    <BlogList
                        onChange={ x=>this.setState({ blogMeta: x }) }
                    />
                }

            </div>
        );
    }
}

export default App;
