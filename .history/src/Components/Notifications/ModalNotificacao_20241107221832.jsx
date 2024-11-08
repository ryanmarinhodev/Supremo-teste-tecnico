import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const ModalNotificacao = ({
  showModal,
  closeModal,
  currentNotification,
  handleChange,
  handleSubmit,
}) => {
  const handleFormSubmit = (e) => {
    e.preventDefault(); // ((( Impede o refresh da página ao pressionar Enter )))
    handleSubmit(); //
  };

  return (
    <Modal show={showModal} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>
          {currentNotification.id
            ? "Editar Notificação"
            : "Cadastrar Notificação"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Título</Form.Label>
            <Form.Control
              type="text"
              placeholder="Título da Notificação"
              name="title"
              value={currentNotification.title}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Mensagem</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Mensagem da Notificação"
              name="message"
              value={currentNotification.message}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Data de Envio</Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={currentNotification.date}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Prioridade</Form.Label>
            <Form.Select
              name="priority"
              value={currentNotification.priority}
              onChange={handleChange}
            >
              <option value="Normal">Normal</option>
              <option value="Alta">Alta</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          {currentNotification.id ? "Salvar Alterações" : "Cadastrar"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalNotificacao;
