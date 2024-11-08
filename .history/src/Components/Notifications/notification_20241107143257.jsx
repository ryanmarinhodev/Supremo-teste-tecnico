import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Form } from "react-bootstrap";

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentNotification, setCurrentNotification] = useState({
    id: null,
    title: "",
    message: "",
    date: "",
  });

  // Carregar notificações simuladas (substitua por chamada à API)
  useEffect(() => {
    setNotifications([
      {
        id: 1,
        title: "Bem-vindo",
        message: "Primeira notificação!",
        date: "2024-11-07",
      },
    ]);
  }, []);

  // Abrir modal para adicionar ou editar
  const openModal = (notification = { title: "", message: "", date: "" }) => {
    setCurrentNotification(notification);
    setIsEditing(!!notification.id);
    setShowModal(true);
  };

  // Fechar modal
  const closeModal = () => {
    setShowModal(false);
    setCurrentNotification({ id: null, title: "", message: "", date: "" });
  };

  // Lidar com mudanças nos campos
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentNotification((prev) => ({ ...prev, [name]: value }));
  };

  // Lidar com o envio do formulário
  const handleSubmit = () => {
    if (isEditing) {
      setNotifications((prev) =>
        prev.map((notif) =>
          notif.id === currentNotification.id ? currentNotification : notif
        )
      );
    } else {
      setNotifications((prev) => [
        ...prev,
        { ...currentNotification, id: Date.now() },
      ]);
    }
    closeModal();
  };

  // Excluir uma notificação
  const handleDelete = (id) => {
    setNotifications((prev) => prev.filter((notif) => notif.id !== id));
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Notificações</h2>
      <Button variant="primary" onClick={() => openModal()} className="mb-4">
        Cadastrar Nova Notificação
      </Button>

      <div className="list-group">
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <div
              key={notification.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div>
                <h5>{notification.title}</h5>
                <p className="mb-1 text-muted">{notification.message}</p>
                <small>Data de Envio: {notification.date}</small>
              </div>
              <div>
                <Button
                  variant="outline-secondary"
                  className="me-2"
                  onClick={() => openModal(notification)}
                >
                  Editar
                </Button>
                <Button
                  variant="outline-danger"
                  onClick={() => handleDelete(notification.id)}
                >
                  Excluir
                </Button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-muted">Nenhuma notificação disponível.</p>
        )}
      </div>

      {/* Modal para cadastrar/editar notificações */}
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {isEditing ? "Editar Notificação" : "Cadastrar Notificação"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
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
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            {isEditing ? "Salvar Alterações" : "Cadastrar"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default NotificationsPage;
