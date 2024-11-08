import React, { useState } from "react";
import {
  Modal,
  Button,
  Form,
  Table,
  Badge,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import {
  FiBell,
  FiEdit,
  FiTrash2,
  FiSearch,
  FiFilter,
  FiCheckCircle,
} from "react-icons/fi";
import "./notification.css";

const EnhancedNotificationsDashboard = () => {
  const [notifications, setNotifications] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");
  const [sidebarActive, setSidebarActive] = useState(false);
  const [currentNotification, setCurrentNotification] = useState({
    id: null,
    title: "",
    message: "",
    date: "",
    status: "Não Lida",
    priority: "Normal",
  });

  // Alterna a sidebar em telas menores
  const toggleSidebar = () => setSidebarActive(!sidebarActive);

  const openModal = (
    notification = {
      title: "",
      message: "",
      date: "",
      status: "Não Lida",
      priority: "Normal",
    }
  ) => {
    setCurrentNotification(notification);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentNotification({
      id: null,
      title: "",
      message: "",
      date: "",
      status: "Não Lida",
      priority: "Normal",
    });
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

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((notif) =>
        notif.id === id ? { ...notif, status: "Lida" } : notif
      )
    );
  };

  return (
    <div className="dashboard-container d-flex">
      {/* Botão de alternância da sidebar em telas pequenas */}
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        <FiBell /> Menu
      </button>

      <aside className={`sidebar p-4 ${sidebarActive ? "active" : ""}`}>
        <h4>Imobiliária Suprema</h4>
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

      <div className="content flex-grow-1 p-4">
        <header className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="page-title">Painel de Notificações</h2>
          <Button variant="primary" onClick={() => openModal()}>
            + Nova Notificação
          </Button>
        </header>

        <div className="button-container mb-4">
          <InputGroup className="me-2">
            <FormControl
              placeholder="Buscar por título ou mensagem"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button variant="outline-primary">
              <FiSearch />
            </Button>
          </InputGroup>
          <Button variant="outline-secondary" className="ms-2">
            <FiFilter /> Filtros
          </Button>
        </div>

        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Título</th>
              <th>Mensagem</th>
              <th>Data</th>
              <th>Status</th>
              <th>Prioridade</th>
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
                    <Badge
                      bg={
                        notification.status === "Não Lida"
                          ? "warning"
                          : "success"
                      }
                    >
                      {notification.status}
                    </Badge>
                  </td>
                  <td>
                    <Badge
                      bg={notification.priority === "Alta" ? "danger" : "info"}
                    >
                      {notification.priority}
                    </Badge>
                  </td>
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
                    {notification.status === "Não Lida" && (
                      <Button
                        variant="outline-success"
                        size="sm"
                        className="ms-2"
                        onClick={() => markAsRead(notification.id)}
                      >
                        <FiCheckCircle /> Marcar como Lida
                      </Button>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center text-muted">
                  Nenhuma notificação disponível.
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default EnhancedNotificationsDashboard;
