import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [authorId, setAuthorId] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: uuidv4(),
      title,
      content,
      author_id: authorId,
      category_id: categoryId,
      tags: tags.split(",").map((tag) => tag.trim()),
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    console.log("New Post:", newPost);
    // Aquí deberías enviar el nuevo post a tu backend
  };

  const modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{size: []}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, 
       {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  };

  const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ];

  return (
    <Container>
      <h2>Añadir Nuevo Post</h2>
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

        <Button variant='primary' type='submit' className='mt-3'>
          Añadir Post
        </Button>
      </Form>
    </Container>
  );
};

export default AddPost;
