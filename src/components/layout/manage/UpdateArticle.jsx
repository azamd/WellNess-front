import React, { Component } from "react";
import ManageArticles from "./ManageArticles";

class UpdateEmployeeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // step 2
      id: this.props.match.params.id,
      Title: "",
      Description: "",
      Content: "",
      Image: "",
    };
    this.changeTitleHandler = this.changeTitleHandler.bind(this);
    this.changeDescHandler = this.changeDescHandler.bind(this);
    this.changeContentHandler = this.changeContentHandler.bind(this);
    this.changeImageHandler = this.changeImageHandler.bind(this);
    this.updateArticle = this.updateArticle.bind(this);
  }

  // step 3
  componentDidMount() {
    // step 4
    if (this.state.id === "_add") {
      return;
    } else {
      ManageArticles.getArticleById(this.state.id).then((res) => {
        let article = res.data;
        this.setState({
          Title: article.Title,
          Description: article.Description,
          Content: article.Content,
        });
      });
    }
  }

  updateArticle = (e) => {
    e.preventDefault();
    let article = {
      Title: this.state.Title,
      Description: this.state.Description,
      Content: this.state.Content,
      Image: this.state.Image,
    };
    console.log("article => " + JSON.stringify(article));
    console.log("id => " + JSON.stringify(this.state.id));
    ManageArticles.updateArticle(article, this.state.id).then((res) => {
      this.props.history.push("/Manage");
    });
  };

  changeTitleHandler = (event) => {
    this.setState({ Title: event.target.value });
  };

  changeDescHandler = (event) => {
    this.setState({ Description: event.target.value });
  };

  changeContentHandler = (event) => {
    this.setState({ Content: event.target.value });
  };

  changeImageHandler = (event) => {
    this.setState({ Image: event.target.value });
  };

  cancel() {
    this.props.history.push("/Manage");
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Update Article</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> Title: </label>
                    <input
                      placeholder="Title"
                      name="Title"
                      className="form-control"
                      value={this.state.Title}
                      onChange={this.changeTitleHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Description: </label>
                    <input
                      placeholder="Description"
                      name="Description"
                      className="form-control"
                      value={this.state.Description}
                      onChange={this.changeDescHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Content: </label>
                    <input
                      placeholder="Content.."
                      name="Content"
                      className="form-control"
                      value={this.state.Content}
                      onChange={this.changeContentHandler}
                    />
                  </div>

                  <div className="form-group">
                    <label> Image: </label>
                    <input
                      placeholder="insert the image of your article here.."
                      name="Image"
                      className="form-control"
                      value={this.state.Image}
                      onChange={this.changeImageHandler}
                    />
                  </div>

                  <button
                    className="btn btn-success"
                    onClick={this.updateArticle}
                  >
                    Save Article
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateEmployeeComponent;
