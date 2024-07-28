import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { GoogleButton } from "../../components/button/Button";
import "../../style/AuthForm.css";
import { authLogin } from "../../Services/AuthService";

export default function SignIn(params) {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().email("Email invalide").required("Email est requis"),
    password: yup
      .string()
      .min(6, "Le mot de passe doit contenir au moins 6 caractères")
      .required("Le mot de passe est requis"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  async function handleLogin(data) {
    const result = await authLogin(data);
    console.log(result);

    if (result.status === 200) {
      console.log("Success:", result.data);
      localStorage.setItem("jwt", result.data?.jwt);
      navigate("/");
    } else {
      console.log("Error:", result.data);
    }
  }

  const onSubmit = (data) => {
    console.log(data);
    handleLogin(data);
  };

  return (
    <div className="container">
      <h3>Connexion</h3>
      <div className="align-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-container">
            <input
              className="form-input"
              type="text"
              placeholder="email"
              {...register("email")}
            />
            {errors.email && (
              <p className="error-message">{errors.email.message}</p>
            )}

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
          </div>
        </form>
        <p>
          Vous n'avez pas encore de compte ?{" "}
          <a onClick={() => navigate("/sign-up")}> Inscrivez-vous ici</a>
        </p>
        <GoogleButton />
      </div>
    </div>
  );
}
