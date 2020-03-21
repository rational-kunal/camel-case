import React from "react";
import './bloglist.css';
import axios from "axios";

function BlogItem({ n, title, onClick }) {
    return (
        <div className="blog-item">
            <span className="number"> { n } </span>
            <span className="a" onClick={ onClick } >{ title }</span>
        </div>
    )
}

export default class BlogList extends React.Component {
    getData() {
        axios.get("https://raw.githubusercontent.com/rational-kunal/article/master/index.json")
            .then(res => {
                console.info(res.data);
                this.setState({
                    blogList: res.data.blogs
                })
            })
    }

    constructor(props) {
        super(props);

        this.state = {
            blogList: []
        };

        this.getData();
    }

    render() {
        return (
            <div className="container blog-container">

                <blockquote>
                    little info anbout me
                </blockquote>

                <div className="blog-inner-container">

                    { this.state.blogList.map((x, i) =>
                        <BlogItem
                            n={ i }
                            title={ x.title }
                            keywords={ x.keywords }
                            url={ x.url }
                            onClick={ () => this.props.onChange(
                                {title: x.title, keywords: x.keywords, url: x.url}
                            ) }
                        />) }

                </div>
            </div>
        )
    }
}
