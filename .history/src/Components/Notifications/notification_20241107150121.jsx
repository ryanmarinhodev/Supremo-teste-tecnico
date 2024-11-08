import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Form } from "react-bootstrap";
import { FiBell, FiEdit, FiTrash2 } from "react-icons/fi"; // Importa ícones para uma aparência mais profissional
import "./notification.css";

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentNotification, setCurrentNotification] = useState({
    id: null,
    title: "",
    message: "",
    date: "",
  });

  const openModal = (notification = { title: "", message: "", date: "" }) => {
    setCurrentNotification(notification);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentNotification({ id: null, title: "", message: "", date: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentNotification((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (currentNotification.id) {
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

  const handleDelete = (id) => {
    setNotifications((prev) => prev.filter((notif) => notif.id !== id));
  };

  return (
    <div className="container mt-5">
      <header className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="page-title d-flex align-items-center">
          <FiBell className="me-2" /> Notificações
        </h2>
        <Button variant="primary" onClick={() => openModal()}>
          Cadastrar Nova Notificação
        </Button>
      </header>

      <div className="notification-list">
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <div
              key={notification.id}
              className="notification-card p-3 mb-3 shadow-sm rounded"
            >
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h5 className="notification-title">{notification.title}</h5>
                  <p className="notification-message text-muted">
                    {notification.message}
                  </p>
                  <small className="text-secondary">
                    Data de Envio: {notification.date}
                  </small>
                </div>
                <div className="d-flex align-items-center">
                  <Button
                    variant="outline-secondary"
                    className="me-2 d-flex align-items-center"
                    onClick={() => openModal(notification)}
                  >
                    <FiEdit className="me-1" /> Editar
                  </Button>
                  <Button
                    variant="outline-danger"
                    className="d-flex align-items-center"
                    onClick={() => handleDelete(notification.id)}
                  >
                    <FiTrash2 className="me-1" /> Excluir
                  </Button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-muted text-center">
            Nenhuma notificação disponível.
          </p>
        )}
      </div>

      {/* Modal para cadastrar/editar notificações */}
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {currentNotification.id
              ? "Editar Notificação"
              : "Cadastrar Notificação"}
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
            {currentNotification.id ? "Salvar Alterações" : "Cadastrar"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default NotificationsPage;
