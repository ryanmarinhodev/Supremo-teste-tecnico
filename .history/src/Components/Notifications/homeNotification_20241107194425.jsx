import React, { useState } from "react";
import Menu from "./menu";
import Buscar from "./buscar";
import TabelaNotificacoes from "./tabelaNotificacoes";
import ModalNotificacao from "./modalNotificacao";
import "./notification.css";
import { Button } from "react-bootstrap";

const DashboardNotificacoes = () => {
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

  const getCurrentDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  const openModal = (
    notification = {
      title: "",
      message: "",
      date: getCurrentDate(),
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
      date: getCurrentDate(),
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

  const filteredNotifications = notifications.filter(
    (notif) =>
      notif.title.toLowerCase().includes(search.toLowerCase()) ||
      notif.message.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="dashboard-container d-flex">
      <Menu />
      <div className="content flex-grow-1 p-4">
        <header className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="page-title">Painel de Notificações</h2>
          <Button variant="primary" onClick={() => openModal()}>
            + Nova Notificação
          </Button>
        </header>

        <Buscar search={search} setSearch={setSearch} />

        <TabelaNotificacoes
          notifications={filteredNotifications}
          openModal={openModal}
          handleDelete={handleDelete}
          markAsRead={markAsRead}
        />

        <ModalNotificacao
          showModal={showModal}
          closeModal={closeModal}
          currentNotification={currentNotification}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default DashboardNotificacoes;
