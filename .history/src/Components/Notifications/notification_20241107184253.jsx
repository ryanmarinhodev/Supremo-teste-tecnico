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
import Logo from "../../assets/logo-supremo-branco.png";

const EnhancedNotificationsDashboard = () => {
  const [notifications, setNotifications] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");
  const [currentNotification, setCurrentNotification] = useState({
    id: null,
    title: "",
    message: "",
    date: "",
    status: "Não Lida",
    priority: "Normal",
  });

  // Função para obter a data atual no formato DD-MM-YYYY
  const getCurrentDate = () => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0"); // Dia com dois dígitos
    const month = String(today.getMonth() + 1).padStart(2, "0"); // Mês com dois dígitos (0-indexed)
    const year = today.getFullYear();

    return `${day}-${month}-${year}`; // Retorna no formato DD-MM-YYYY
  };

  // Abre o modal e define a data como a data atual
  const openModal = (
    notification = {
      title: "",
      message: "",
      date: getCurrentDate(), // Define a data atual como padrão
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
      date: getCurrentDate(), // Redefine a data para o dia atual
      status: "Não Lida",
      priority: "Normal",
    });
  };

  // Manipula mudanças nos campos do formulário
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

  // Função para excluir uma notificação pelo ID
  const handleDelete = (id) => {
    setNotifications((prev) => prev.filter((notif) => notif.id !== id));
  };

  // Função para marcar uma notificação como "Lida"
  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((notif) =>
        notif.id === id ? { ...notif, status: "Lida" } : notif
      )
    );
  };

  return (
    <div className="dashboard-container d-flex">
      <aside className="sidebar p-4">
        <img src={Logo} alt="Logotipo Supremo" className="logo" />
        <ul className="nav flex-column mt-4">
          <li className="nav-item mb-2">
            <a href="/notifications" className="nav-link active">
              <FiBell className="me-2" /> Notificações
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

        {/* Tabela de Notificações */}
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
    </div>
  );
};

export default EnhancedNotificationsDashboard;
