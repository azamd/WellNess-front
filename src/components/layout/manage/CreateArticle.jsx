import { useEffect } from "react";
import { useState } from "react";

import ManageArticles from "./ManageArticles";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const ArctileForm = ({ as, dataToEdit, show, handleClose }) => {
  const [data, setData] = useState({ title: "", description: "", content: "" });

  const { title, description, content } = data;

  useEffect(() => {
    if (as === "edit") {
      setData(dataToEdit);
    }
  }, [dataToEdit, as]);

  const handleChange = (name, value) => {
    setData({ ...data, [`${name}`]: value });
  };

  const handleSubmit = (event, data) => {
    event.preventDefault();
    if (as === "edit") {
      ManageArticles.updateArticle(data.articleId, data);
      handleClose();
    } else {
      ManageArticles.createArticle(data);
      handleClose();
    }
  };
  return (
    <Modal show={show} onHide={() => handleClose()}>
      <Modal.Header closeButton>
        <Modal.Title>{as === "edit" ? "Edit" : "Add"} Article</Modal.Title>
      </Modal.Header>
      <form onSubmit={(e) => handleSubmit(e, data)}>
        <Modal.Body>
          <div className="form-group">
            <label> Title: </label>
            <input
              placeholder="title"
              name="title"
              className="form-control"
              defaultValue={title}
              onChange={(event) => handleChange("title", event.target.value)}
            />
          </div>
          <div className="form-group">
            <label> Description: </label>
            <input
              placeholder="description"
              name="description"
              className="form-control"
              defaultValue={description}
              onChange={(event) =>
                handleChange("description", event.target.value)
              }
            />
          </div>
          <div className="form-group">
            <label> Content: </label>
            <input
              placeholder="Content.."
              name="content"
              className="form-control"
              defaultValue={content}
              onChange={(event) => handleChange("content", event.target.value)}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} variant="secondary">
            Close
          </Button>
          <Button type="submit" variant="success">
            Save Changes
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default ArctileForm;
