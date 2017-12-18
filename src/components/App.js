import '../css/App.css';
import React from 'react';
import Blog from './blogs/Blog';
import ArticleForm from './blogs/ArticleForm';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      blog: [
        {
          title: 'You can add your article',
          body: 'Press + to add new article.'
        }
      ]
    };

    this.addArticle = this.addArticle.bind(this);
    this.deleteArticle = this.deleteArticle.bind(this);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title text-center">cham11ng's Blog</h1>
        </header>
        <ArticleForm onSubmit={this.addArticle}/>
        <Blog value={this.state.blog} onDelete={this.deleteArticle}/>
      </div>
    );
  }

  addArticle(article) {
    let blog = this.state.blog.slice();
    blog.push(article);
    this.setState({ blog });
  }

  deleteArticle(index) {
    let blog = this.state.blog.slice();
    blog = blog.filter((value, i) => i !== index);
    this.setState({ blog });
  }
}

export default App;
