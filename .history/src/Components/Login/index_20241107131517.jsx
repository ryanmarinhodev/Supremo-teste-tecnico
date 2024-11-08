import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css"; // Arquivo CSS para estilização adicional

const Login = () => {
  return (
    <div className="login-container d-flex align-items-center justify-content-center min-vh-100">
      <div className="login-card p-4 shadow rounded">
        <div className="text-center mb-4">
          <img
            src="path/to/your/logo.png"
            alt="Logotipo Supremo"
            className="logo mb-2"
          />
          <h3 className="fw-bold">Bem-vindo de volta</h3>
          <p className="text-muted">Faça login na sua conta</p>
        </div>
        <form>
          <div className="mb-3">
            <label className="form-label fw-semibold">Usuário</label>
            <input
              type="text"
              className="form-control"
              placeholder="Digite seu usuário"
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">Senha</label>
            <input
              type="password"
              className="form-control"
              placeholder="Digite sua senha"
            />
          </div>
          <div className="text-end">
            <a
              href="/forgot-password"
              className="text-decoration-none text-primary small"
            >
              Esqueci a senha?
            </a>
          </div>
          <button type="submit" className="btn btn-primary w-100 mt-3">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
