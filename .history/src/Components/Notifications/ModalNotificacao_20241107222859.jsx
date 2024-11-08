import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const ModalNotificacao = ({
  showModal,
  closeModal,
  currentNotification,
  handleChange,
  handleSubmit, // Função que lida com a submissão da notificação
}) => {
  // ((( Função para lidar com o evento de submit do formulário )))
  const handleFormSubmit = (e) => {
    e.preventDefault(); // ((( Previne o refresh da página ao pressionar Enter )))
    handleSubmit(); // ((( Chama a função handleSubmit passada como prop )))
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
        {/* ((( O formulário usa onSubmit para chamar handleFormSubmit ))) */}
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
          {/* ((( Botão de enviar, que também pode ser clicado para enviar a notificação ))) */}
          <Button variant="primary" type="submit">
            {currentNotification.id ? "Salvar Alterações" : "Cadastrar"}
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeModal}>
          Cancelar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalNotificacao;
