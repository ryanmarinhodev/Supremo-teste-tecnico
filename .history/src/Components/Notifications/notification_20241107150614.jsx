import React, { useState } from "react";
import { Modal, Button, Form, Table } from "react-bootstrap";
import { FiBell, FiEdit, FiTrash2, FiSearch, FiFilter } from "react-icons/fi";
import "./notifications.css";

const NotificationsDashboard = () => {
  const [notifications, setNotifications] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");
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
    <div className="dashboard-container d-flex">
      {/* Sidebar de Navegação */}
      <aside className="sidebar p-4">
        <h4>Minha Empresa</h4>
        <ul className="nav flex-column mt-4">
          <li className="nav-item mb-2">
            <a href="/notifications" className="nav-link active">
              <FiBell className="me-2" /> Notificações
            </a>
          </li>
          <li className="nav-item mb-2">
            <a href="/settings" className="nav-link">
              Configurações
            </a>
          </li>
          <li className="nav-item">
            <a href="/profile" className="nav-link">
              Perfil
            </a>
          </li>
        </ul>
      </aside>

      {/* Área Principal */}
      <div className="content flex-grow-1 p-4">
        <header className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="page-title">Painel de Notificações</h2>
          <Button variant="primary" onClick={() => openModal()}>
            + Nova Notificação
          </Button>
        </header>

        {/* Barra de Busca e Filtro */}
        <div className="d-flex mb-4">
          <Form.Control
            type="text"
            placeholder="Buscar por título ou mensagem"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="me-2"
          />
          <Button variant="outline-primary">
            <FiSearch />
          </Button>
          <Button variant="outline-secondary" className="ms-2">
            <FiFilter /> Filtros
          </Button>
        </div>

        {/* Tabela de Notificações */}
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Título</th>
              <th>Mensagem</th>
              <th>Data de Envio</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {notifications.length > 0 ? (
              notifications.map((notification) => (
                <tr key={notification.id}>
                  <td>{notification.title}</td>
                  <td>{notification.message}</td>
                  <td>{notification.date}</td>
                  <td>
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      className="me-2"
                      onClick={() => openModal(notification)}
                    >
                      <FiEdit /> Editar
                    </Button>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => handleDelete(notification.id)}
                    >
                      <FiTrash2 /> Excluir
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center text-muted">
                  Nenhuma notificação disponível.
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>

      {/* Modal para Cadastrar/Editar Notificação */}
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

export default NotificationsDashboard;