import { useState, useEffect } from "react";
import ManageArticles from "./ManageArticles";
import ArctileForm from "./CreateArticle";
import Button from "react-bootstrap/Button";

const ListArticles = () => {
  const [articles, setArticles] = useState([]);
  const [show, setShow] = useState(false);
  const [formType, setFormType] = useState("add");
  const [dataToEdit, setDataToEdit] = useState({});

  const handleClose = () => {
    setDataToEdit({ title: "", description: "", content: "" });
    setShow(false);
  };

  const handleShow = (type, data) => {
    setFormType(type);
    setDataToEdit(data);
    setShow(true);
  };

  useEffect(() => {
    ManageArticles.getArticles().then((res) => {
      setArticles(res.data);
    });
  }, []);

  const deleteArticle = async (id) => {
    ManageArticles.deleteArticle(id);
    const filtredArticles = articles.filter((article) => article.id !== id);
    await setArticles(filtredArticles);
  };

  return (
    <div>
      <h2 className="text-center">Manage Articles</h2>
      <div className="row">
        <Button variant="primary" onClick={() => handleShow("add")}>
          Create New Article
        </Button>
      </div>
      <br></br>
      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th> Title</th>
              <th>Publish Date</th>
              <th> Description</th>
              <th> Content</th>
              <th> Image</th>
              <th> Actions</th>
            </tr>
          </thead>
          <tbody>
            {articles.map((article) => (
              <tr key={article.articleId}>
                <td>{article.articleId}</td>
                <td> {article.title} </td>
                <td>{article.publishDate}</td>
                <td> {article.description}</td>
                <td> {article.content}</td>
                <td>{article.image}</td>
                <td>
                  <Button
                    variant="info"
                    onClick={() => handleShow("edit", article)}
                  >
                    Update{""}
                  </Button>
                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={() => deleteArticle(article.articleId)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <ArctileForm
          show={show}
          handleClose={handleClose}
          as={formType}
          dataToEdit={dataToEdit}
        />
      </div>
    </div>
  );
};

export default ListArticles;
