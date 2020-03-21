import React from "react";
import axios from "axios";
import BlogTitle from "../NavBar/BlogTitle";
import BlogButton from "../NavBar/BlogButton";
import './blog.css';

export default class Blog extends React.Component {
    getData(url) {
        axios.get(url)
            .then(res => {
                axios.post(`https://api.github.com/markdown`, {
                    "text": res.data,
                    "mode": "gfm",
                    "context": "github/gollum"
                })
                    .then(res => {
                        console.log(res.data);

                        this.setState({
                            article: res.data
                        });
                    })
            });
    }

    constructor(props) {
        super(props);

        this.state = {
            article: ""
        };

        this.getData(this.props.url);
    }
    render() {
        return (
            <div className="container blog-container">
                <div className="blog-inner--container">

                    <div className="blog-main-header-container">
                        <BlogTitle blogTitle={ this.props.title }/>
                        <div className="blog-button-container">
                            { this.props.keywords.map(x => <BlogButton title={ x } />) }
                        </div>
                    </div>

                    <div dangerouslySetInnerHTML={{__html: this.state.article}}>
                    </div>

                </div>
            </div>
        )
    }
}
