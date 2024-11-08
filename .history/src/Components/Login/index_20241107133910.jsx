import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

import Logo from "../../assets/logo-supremo-login.jpg";

const Login = () => {
  return (
    <div className="login-container d-flex align-items-center justify-content-center min-vh-100">
      <div className="login-card p-5 shadow-lg rounded-4">
        <div className="text-center mb-4">
          <img src={Logo} alt="Logotipo Supremo" className="logo mb-3" />
          <h4 className="login-title">Faça seu login</h4>
          <div className="title-underline"></div>
          <p className="text-muted subtitle">
            Solução Integrada para Imobiliárias
          </p>
        </div>
        <form>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Informe Seu Login"
            />
            <label htmlFor="floatingInput">Informe Seu Login</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Informe Sua Senha"
            />
            <label htmlFor="floatingPassword">Informe Sua Senha</label>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <a
              href="/forgot-password"
              className="text-decoration-none text-secondary small"
            >
              Esqueci a senha
            </a>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Entrar no Supremo
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
