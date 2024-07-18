import React from "react";
import { GoogleButton } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import "../../style/AuthForm.css";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import authRegister from "../../Services/AuthService";

export default function SignUp(params) {
  const navigate = useNavigate();
  const schema = yup.object().shape({
    email: yup.string().email('Email invalide').required('Email est requis'),
    password: yup.string().min(6, 'Le mot de passe doit contenir au moins 6 caractères').required('Le mot de passe est requis'),
  });
  const { handleSubmit, register, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  const onSubmit = (data) =>{
    console.log(data);
    authRegister(data);
  }


  return (
    <div className="container">
      <h3>Inscription</h3>
      <div className="align-form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-container">

            <input className="form-input" type="text" placeholder="email" {...register("email")}/>
            {errors.email && <p className="error-message">{errors.email.message}</p>}

            <input className="form-input" type="password" placeholder="password" {...register("password")}/>
            {errors.password && <p className="error-message">{errors.password.message}</p>}

            <div className="button-container">
              <input type="submit" />
            </div>
            <p>Vous avez déja un compte ? <a onClick={() => navigate("/sign-in")}> Connecter-vous ici</a></p>
            <GoogleButton />
          </div>
        </form>
      </div>
    </div>
  );
}
