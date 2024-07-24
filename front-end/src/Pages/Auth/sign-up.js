import React from "react";
import { GoogleButton } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import "../../style/AuthForm.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { authRegister } from "../../Services/AuthService";

export default function SignUp(params) {
  const navigate = useNavigate();
  const schema = yup.object().shape({
    username: yup
      .string()
      .min(3, "*Le username doit contenir au moins 3 caractères")
      .required("*Le username est requis"),
    email: yup.string().email("*Email invalide").required("*Email est requis"),
    password: yup
      .string()
      .min(8, "*Le mot de passe doit contenir au moins 8 caractères")
      .required("*Le mot de passe est requis"),
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  async function handleRegister(data) {
    const result = await authRegister(data);
    console.log("result sign in js =>", result);
    console.log(result.status);

    if (result.status === 200) {
      console.log("Success:", result.data);
      navigate("/sign-in");
    } else {
      console.log("Error:", result.data);
    }
  }

  const onSubmit = (data) => {
    console.log(data);
    handleRegister(data);
  };

  return (
    <div className="container">
      <h3>Inscription</h3>
      <div className="align-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-container">
            <label className="Auth-label">Utilisateur</label>
            <input
              className="form-input"
              type="text"
              placeholder="username"
              {...register("username")}
            />
            {errors.username && (
              <p className="error-message">{errors.username.message}</p>
            )}
            <label className="Auth-label">Adresse Email</label>
            <input
              className="form-input"
              type="text"
              placeholder="email"
              {...register("email")}
            />
            {errors.email && (
              <p className="error-message">{errors.email.message}</p>
            )}
            <label className="Auth-label">Mot de passe</label>
            <input
              className="form-input"
              type="password"
              placeholder="password"
              {...register("password")}
            />
            {errors.password && (
              <p className="error-message">{errors.password.message}</p>
            )}

            <div className="button-container">
              <input className="form-btn" type="submit" />
            </div>
            <p>
              Vous avez déja un compte ?{" "}
              <a onClick={() => navigate("/sign-in")}> Connecter-vous ici</a>
            </p>
            <hr/>
            <GoogleButton />
          </div>
        </form>
      </div>
    </div>
  );
}
