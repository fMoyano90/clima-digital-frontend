import React, { useEffect, useState } from "react";
import { Table, Pagination, Button } from "react-bootstrap";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

const PostsList = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const fetchPosts = async () => {
    // Mock data to simulate API response
    const mockData = {
      posts: [
        {
          id: uuidv4(),
          title: "First Post",
          content: "This is the content of the first post.",
          author_id: "Felipe Moyano",
          category_id: "Tech",
          tags: ["React", "JavaScript"],
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        {
          id: uuidv4(),
          title: "Second Post",
          content: "This is the content of the second post.",
          author_id: "Felipe Moyano",
          category_id: "Business",
          tags: ["Node.js", "Express"],
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        },
        // Add more mock posts as needed
      ],
      total: 2,
    };

    // Simulating network delay
    setTimeout(() => {
      setPosts(mockData.posts);
    }, 500);
  };

  return (
    <div className='p-5'>
      <div className='d-flex justify-content-between align-items-center mb-3'>
        <h2>Posts</h2>

        <Button onClick={() => navigate("/admin/add-post")}>Añadir Post</Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Título</th>
            <th>Contenido</th>
            <th>Autor</th>
            <th>Categoría</th>
            <th>Tags</th>
            <th>Creado</th>
            <th>Actualizado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.title}</td>
              <td>{post.content}</td>
              <td>{post.author_id}</td>
              <td>{post.category_id}</td>
              <td>{post.tags ? post.tags.join(", ") : ""}</td>
              <td>{new Date(post.created_at).toLocaleDateString()}</td>
              <td>{new Date(post.updated_at).toLocaleDateString()}</td>
              <td className='d-flex justify-content-around'>
                <Button variant='info' size='sm'>
                  <FaEye />
                </Button>
                <Button
                  variant='warning'
                  size='sm'
                  onClick={() => navigate(`/admin/edit-post/${post.id}`)}
                >
                  <FaEdit />
                </Button>
                <Button variant='danger' size='sm'>
                  <FaTrash />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination>
        <Pagination.Prev
          onClick={() => setPage(page - 1)}
          disabled={page === 0}
        />
        <Pagination.Item active>{page + 1}</Pagination.Item>
        <Pagination.Next onClick={() => setPage(page + 1)} />
      </Pagination>
    </div>
  );
};

export default PostsList;
