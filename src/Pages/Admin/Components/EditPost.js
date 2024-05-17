import React, { useState, useEffect } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import { useParams, useNavigate } from 'react-router-dom';
import 'react-quill/dist/quill.snow.css';

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Aquí deberías cargar los datos del post desde tu backend
    // Para el ejemplo, usaremos datos simulados
    const mockPost = {
      id,
      title: "Example Post",
      content: "This is an example content.",
      author_id: "Felipe Moyano",
      category_id: "Tech",
      tags: ["React", "JavaScript"],
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    setPost(mockPost);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí deberías enviar los datos actualizados del post a tu backend
    console.log('Updated Post:', post);
    navigate('/admin/posts');
  };

  if (!post) return <div>Loading...</div>;

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
      <h2>Editar Post</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="title">
          <Form.Label>Título</Form.Label>
          <Form.Control
            type="text"
            placeholder="Introduce el título"
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
            required
          />
        </Form.Group>

        <Form.Group controlId="content">
          <Form.Label>Contenido</Form.Label>
          <ReactQuill
            value={post.content}
            onChange={(value) => setPost({ ...post, content: value })}
            modules={modules}
            formats={formats}
            placeholder="Introduce el contenido"
            required
          />
        </Form.Group>

        <Form.Group controlId="authorId">
          <Form.Label>Autor</Form.Label>
          <Form.Control
            type="text"
            placeholder="Introduce el ID del autor"
            value={post.author_id}
            onChange={(e) => setPost({ ...post, author_id: e.target.value })}
            required
          />
        </Form.Group>

        <Form.Group controlId="categoryId">
          <Form.Label>Categoría</Form.Label>
          <Form.Control
            type="text"
            placeholder="Introduce el ID de la categoría"
            value={post.category_id}
            onChange={(e) => setPost({ ...post, category_id: e.target.value })}
            required
          />
        </Form.Group>

        <Form.Group controlId="tags">
          <Form.Label>Tags</Form.Label>
          <Form.Control
            type="text"
            placeholder="Introduce los tags separados por comas"
            value={post.tags.join(", ")}
            onChange={(e) => setPost({ ...post, tags: e.target.value.split(',').map(tag => tag.trim()) })}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Actualizar Post
        </Button>
      </Form>
    </Container>
  );
};

export default EditPost;
