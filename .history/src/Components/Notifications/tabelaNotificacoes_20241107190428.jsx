import React from "react";
import { Table, Button, Badge } from "react-bootstrap";
import { FiEdit, FiTrash2, FiCheckCircle } from "react-icons/fi";

const TabelaNotificacoes = ({
  notifications,
  openModal,
  handleDelete,
  markAsRead,
}) => (
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
                bg={notification.status === "Não Lida" ? "warning" : "success"}
              >
                {notification.status}
              </Badge>
            </td>
            <td>
              <Badge bg={notification.priority === "Alta" ? "danger" : "info"}>
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
);

export default TabelaNotificacoes;
