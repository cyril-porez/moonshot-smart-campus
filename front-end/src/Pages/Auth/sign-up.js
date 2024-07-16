import React from "react";
import { FormInput } from "../../components/FormInput";
import { FormButton, GoogleButton } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import "../../style/AuthForm.css";

export default function SignUp(params) {
  const navigate = useNavigate();
  return (
    <div className="container">
      <h3>Inscription</h3>
      <div className="align-form">
        <div className="form-container">
          <FormInput legend={"Adresse Email"} type={"text"} />
          <FormInput legend={"Password"} type={"text"} />
          <div className="button-container">
            <FormButton text={"Connexion"} />
          </div>
          <p>Vous avez déja un compte ? <a onClick={() => navigate("/sign-in")}> Connecter-vous ici</a></p>
          <GoogleButton />
        </div>
      </div>
    </div>
  );
}
