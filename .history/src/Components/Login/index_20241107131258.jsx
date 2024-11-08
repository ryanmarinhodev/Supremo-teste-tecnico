import React from "react";

const Login = () => (
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-4">
        <form>
          <h2 className="text-center">Login</h2>
          <div className="mb-3">
            <label className="form-label">Usuário</label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Senha</label>
            <input type="password" className="form-control" />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Entrar
          </button>
        </form>
      </div>
    </div>
  </div>
);

export default Login;
