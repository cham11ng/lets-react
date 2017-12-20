import React from 'react';

import Blog from './blogs/Blog';
import Header from './headers/Header';
import Button from './elements/Button';
import Message from './elements/Message';
import ArticleForm from './blogs/ArticleForm';
import ArticleService from '../services/ArticleService';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      blog: [],
      form: {
        title: '',
        body: ''
      },
      isAddModal: false,
      editIndex: null,
      isEditing: false,
      isAuthenticated: true
    };

    this.articleService = new ArticleService();
    this.addArticle = this.addArticle.bind(this);
    this.editArticle = this.editArticle.bind(this);
    this.deleteArticle = this.deleteArticle.bind(this);
    this.fetchAllArticle = this.fetchAllArticle.bind(this);

    this.handleChange = this.handleChange.bind(this);
    this.toggleAddForm = this.toggleAddForm.bind(this);
    this.toggleEditForm = this.toggleEditForm.bind(this);
  }

  componentDidMount() {
    this.fetchAllArticle();
  }

  fetchAllArticle() {
    let blog = this.articleService.fetchAll();

    return this.setState({ blog });
  }

  addArticle(event) {
    event.preventDefault();
    let blog = this.articleService.add(this.state.form);
    if (!blog.length) {
      blog = this.state.blog.slice();
      blog.push(this.state.form);
    }

    return this.setState({
      blog: blog,
      isAddModal: !this.state.isAddModal,
      isEditing: false
    });
  }

  editArticle(event) {
    event.preventDefault();
    let blog = this.articleService.edit(this.state.form);
    if (!blog.length) {
      blog = this.state.blog.slice();
      blog[this.state.editIndex] = this.state.form;
    }

    return this.setState({
      blog: blog,
      editIndex: null,
      isEditing: false
    });
  }

  deleteArticle(index) {
    let blog = this.articleService.remove(index);
    if (!blog.length) {
      blog = this.state.blog.slice();
      blog.splice(index, 1);
    }

    return this.setState({ blog });
  }

  toggleAddForm() {
    return this.setState({
      isAddModal: !this.state.isAddModal,
      isEditing: false,
      form: {
        title: '',
        body: ''
      }
    });
  }

  toggleEditForm(index = null) {
    return this.setState({
      isEditing: false,
      editIndex: index,
      form: (index !== null) ? this.state.blog[index] : {
        title: '',
        body: '',
      }
    });
  }

  handleChange(event) {
    let article = Object.assign({}, this.state.form);
    article[event.target.name] = event.target.value;

    return this.setState({
      form: article,
      isEditing: true
    });
  }

  render() {
    let message = <Message value=":( Your session was expired."/>;

    let blog = (
      <div className="container">
        <div className="content has-text-right">
          <Button value=" Add Article"
                  className="button fa fa-plus"
                  onClick={this.toggleAddForm}/>
        </div>
        <ArticleForm title="Add Article"
                     isActive={this.state.isAddModal}
                     value={this.state.form}
                     onClose={this.toggleAddForm}
                     onChange={this.handleChange}
                     handleSubmit={this.addArticle}/>
        <ArticleForm title="Edit Article"
                     isActive={this.state.editIndex !== null}
                     value={this.state.isEditing
                       ? this.state.form
                       : this.state.blog[this.state.editIndex] || this.state.form}
                     onClose={this.toggleEditForm}
                     onChange={this.handleChange}
                     handleSubmit={this.editArticle}/>
        <Blog value={this.state.blog}
              onDelete={this.deleteArticle}
              onEdit={this.toggleEditForm}/>
      </div>
    );

    return (
      <div className="App">
        <Header title="cham11ng's Blog" subTitle="Informational, Discussion, Inspirational"/>
        <section className="section">
          {this.state.isAuthenticated ? blog : message}
        </section>
      </div>
    );
  }
}

export default App;
