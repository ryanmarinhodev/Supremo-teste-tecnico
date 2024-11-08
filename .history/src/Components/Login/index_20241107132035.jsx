import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container d-flex align-items-center justify-content-center min-vh-100">
      <div className="login-card p-5 shadow-lg rounded-4">
        <div className="text-center mb-5">
          <img
            src="path/to/your/logo.png"
            alt="Logotipo Supremo"
            className="logo mb-3"
          />
          <h2 className="fw-bold text-primary">Bem-vindo de volta</h2>
          <p className="text-muted fs-6">
            Entre com suas credenciais para continuar
          </p>
        </div>
        <form>
          <div className="form-floating mb-4">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Usuário"
            />
            <label htmlFor="floatingInput">Usuário</label>
          </div>
          <div className="form-floating mb-4">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Senha"
            />
            <label htmlFor="floatingPassword">Senha</label>
          </div>
          <div className="d-flex justify-content-between mb-3">
            <a
              href="/forgot-password"
              className="text-decoration-none text-secondary small"
            >
              Esqueci a senha
            </a>
            <button type="submit" className="btn btn-primary px-4">
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
