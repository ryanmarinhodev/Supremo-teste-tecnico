import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const ModalNotificacao = ({
  showModal,
  closeModal,
  currentNotification,
  handleChange,
  handleSubmit, // Função para lidar com o submit
}) => {
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
        {/* ((( O onSubmit chama handleSubmit que deve lidar com o evento ))) */}
        <Form onSubmit={handleSubmit}>
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
        {/* ((( Removemos o onClick do botão, já que o submit será tratado pelo formulário ))) */}
        <Button variant="primary" type="submit" form="notificationForm">
          {currentNotification.id ? "Salvar Alterações" : "Cadastrar"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalNotificacao;
