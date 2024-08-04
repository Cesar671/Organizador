import React, { useState } from "react";
import { CardN } from "./components/CardN";
import noticiasData from "./components/noticias.json";
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";
import { CardN2 } from "./components/CardI";

const Noticias = () => {
  const [cards, setCards] = useState(noticiasData.cards);
  const [showModal, setShowModal] = useState(false);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false); 
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    tags: "",
    image: null,
  });
  const [selectedNoticia, setSelectedNoticia] = useState(null);

  const groupedCards = cards.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / 3);
    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }
    resultArray[chunkIndex].push(item);
    return resultArray;
  }, []);

  const handleShow = () => setShowModal(true);
  const handleClose = () => {
    setShowModal(false);
    setFormData({
      title: "",
      description: "",
      tags: "",
      image: null,
    });
  };

  const handlePreviewShow = () => {
    setShowPreviewModal(true);
    setShowModal(false); 
  };

  const handlePreviewClose = () => {
    setShowPreviewModal(false);
    setShowModal(true); 
  };

  const handleSuccessClose = () => {
    setShowSuccessModal(false);
    handleClose(); 
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNoticia = {
      image: URL.createObjectURL(formData.image),
      date: new Date().toLocaleDateString("es-ES"),
      title: formData.title,
      description: formData.description,
      tags: formData.tags.split(",").map(tag => tag.trim())
    };
    setCards(prevCards => [...prevCards, newNoticia]);
    setShowPreviewModal(false);
    setShowSuccessModal(true);
  };

  const handleCardClick = (noticia) => {
    setSelectedNoticia(noticia);
  };

  return (
    <Container>
      <div>
        <h1>Noticias</h1>
        <Button onClick={handleShow}>Subir Noticia</Button>
      </div>
      <div>
        <CardN2 noticia={selectedNoticia} />
      </div>
      <div>
        {groupedCards.map((group, index) => (
          <Row key={index} className="mb-4">
            {group.map((noticia, idx) => (
              <Col key={idx} xs={12} md={4}>
                <CardN
                  image={noticia.image}
                  altText={noticia.altText}
                  date={noticia.date}
                  title={noticia.title}
                  description={noticia.description}
                  tags={noticia.tags}
                  onClick={() => handleCardClick(noticia)}
                />
              </Col>
            ))}
          </Row>
        ))}
      </div>

      {/* Modal de formulario */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Subir Noticia</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formTitle">
              <Form.Label>Título</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el título"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formDescription">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Ingrese la descripción"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formTags">
              <Form.Label>Tags</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese los tags separados por comas"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formImage">
              <Form.Label>Imagen</Form.Label>
              <Form.Control
                type="file"
                name="image"
                onChange={handleChange}
                accept="image/*"
                required
              />
            </Form.Group>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Cerrar
              </Button>
              <Button variant="primary" onClick={handlePreviewShow}>
                Vista Previa
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Modal de vista previa */}
      <Modal show={showPreviewModal} onHide={handlePreviewClose}>
        <Modal.Header closeButton>
          <Modal.Title>Vista Previa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {formData.image && (
            <div>
              <img
                src={URL.createObjectURL(formData.image)}
                alt="Preview"
                style={{
                  width: "100%",
                  maxHeight: "300px",
                  objectFit: "cover",
                }}
              />
            </div>
          )}
          <div>
            <strong>Titulo:</strong> {formData.title}
          </div>
          <div>
            <strong>Descripcion:</strong> {formData.description}
          </div>
          <div>
            <strong>Tags:</strong> {formData.tags}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handlePreviewClose}>
            Editar
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal de éxito */}
      <Modal show={showSuccessModal} onHide={handleSuccessClose}>
        <Modal.Header closeButton>
          <Modal.Title>Éxito</Modal.Title>
        </Modal.Header>
        <Modal.Body>Noticia subida con éxito.</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSuccessClose}>
            Aceptar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Noticias;
