import React from 'react';
import '../../css/Blog.css';
import Article from './Article';

class Blog extends React.Component {
  render() {
    return (
      <section className="Blog">
        {this.props.value.map((article, index) => <Article value={article} key={index}/>)}
      </section>
    );
  }
}

export default Blog;
