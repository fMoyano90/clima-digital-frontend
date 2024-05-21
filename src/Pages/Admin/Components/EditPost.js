import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";

const UpdatePost = ({ postId, existingPost }) => {
  const [title, setTitle] = useState(existingPost.title);
  const [content, setContent] = useState(existingPost.content);
  const [authorId, setAuthorId] = useState(existingPost.authorId);
  const [categoryId, setCategoryId] = useState(existingPost.categoryId);
  const [tags, setTags] = useState(existingPost.tags.join(", "));
  const [smallBanner, setSmallBanner] = useState(null);
  const [mediumBanner, setMediumBanner] = useState(null);
  const [largeBanner, setLargeBanner] = useState(null);

  const handleFileChange = (e, setBanner) => {
    setBanner(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("authorId", authorId);
    formData.append("categoryId", categoryId);
    formData.append(
      "tags",
      tags.split(",").map((tag) => tag.trim())
    );
    if (smallBanner) formData.append("smallBanner", smallBanner);
    if (mediumBanner) formData.append("mediumBanner", mediumBanner);
    if (largeBanner) formData.append("largeBanner", largeBanner);

    try {
      const response = await axios.put(`/api/posts/${postId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Post updated successfully:", response.data);
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  return (
    <Container>
      <h2>Actualizar Post</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='title'>
          <Form.Label>Título</Form.Label>
          <Form.Control
            type='text'
            placeholder='Introduce el título'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId='content'>
          <Form.Label>Contenido</Form.Label>
          <ReactQuill
            value={content}
            onChange={(value) => setContent(value)}
            modules={modules}
            formats={formats}
            placeholder='Introduce el contenido'
            required
          />
        </Form.Group>

        <Form.Group controlId='authorId'>
          <Form.Label>Autor</Form.Label>
          <Form.Control
            type='text'
            placeholder='Introduce el ID del autor'
            value={authorId}
            onChange={(e) => setAuthorId(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId='categoryId'>
          <Form.Label>Categoría</Form.Label>
          <Form.Control
            type='text'
            placeholder='Introduce el ID de la categoría'
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId='tags'>
          <Form.Label>Tags</Form.Label>
          <Form.Control
            type='text'
            placeholder='Introduce los tags separados por comas'
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId='smallBanner'>
          <Form.Label>Banner Pequeño (82x92)</Form.Label>
          <Form.Control
            type='file'
            onChange={(e) => handleFileChange(e, setSmallBanner)}
          />
        </Form.Group>

        <Form.Group controlId='mediumBanner'>
          <Form.Label>Banner Mediano (244x303)</Form.Label>
          <Form.Control
            type='file'
            onChange={(e) => handleFileChange(e, setMediumBanner)}
          />
        </Form.Group>

        <Form.Group controlId='largeBanner'>
          <Form.Label>Banner Grande (850x462)</Form.Label>
          <Form.Control
            type='file'
            onChange={(e) => handleFileChange(e, setLargeBanner)}
          />
        </Form.Group>

        <Button variant='primary' type='submit' className='mt-3'>
          Actualizar Post
        </Button>
      </Form>
    </Container>
  );
};

export default UpdatePost;
