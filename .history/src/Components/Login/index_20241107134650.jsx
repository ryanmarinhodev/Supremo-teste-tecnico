import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

import Logo from "../../assets/logo-supremo-login.jpg";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");

  // Função para alternar a visibilidade da senha
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

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
            <label htmlFor="floatingInput">Informe seu Login</label>
          </div>
          <div className="form-floating mb-3 position-relative">
            <input
              type={passwordVisible ? "text" : "password"}
              className="form-control"
              id="floatingPassword"
              placeholder="Informe Sua Senha"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
            />
            <label htmlFor="floatingPassword">Informe sua Senha</label>

            {passwordInput && (
              <button
                type="button"
                className="btn btn-link position-absolute end-0 top-50 translate-middle-y me-2"
                onClick={togglePasswordVisibility}
                style={{ textDecoration: "none" }}
              >
                {passwordVisible ? "Ocultar" : "Mostrar"}
              </button>
            )}
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
