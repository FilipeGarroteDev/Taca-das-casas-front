import AuthLayout from '../../components/Auth/AuthLayout';
import Button from '../../components/Auth/Button';
import Form from '../../components/Auth/Form';
import Wrapper from '../../components/Auth/Wrapper';
import { useState } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import CreaStripePattern from '../../components/CreaStripePattern';
import logo from "../../assets/logoCrea.jpeg"
import { useNavigate } from 'react-router';
import { users } from '../../../mock';

export default function SigninPage() {
  const [signInData, setSignInData] = useState({});
  const navigate = useNavigate()

  function handleInput(e) {
    setSignInData({
      ...signInData,
      [e.target.name]: e.target.value,
    });
  }

  async function sendForm(e) {
    e.preventDefault();
    try {
      const user = users.find(user => user.email === signInData.email)
      
      if(!user || user.password !== signInData.password) throw new Error();

      localStorage.setItem("user", JSON.stringify(user))
      navigate("/")
    } catch (error) {
      toast.error('O e-mail ou senha estão incorretos. Por favor, verifique e tente de novo! :)');
    }
  }

  return (
    <Wrapper>
      <CreaStripePattern position="header"/>
      <AuthLayout>
        <AuthContainer>
          <img src={logo} alt='Logo - Crea+' />
          <h1>Login</h1>
          <Form onSubmit={sendForm}>
            <input name="email" type="email" placeholder="Digite seu e-mail :)" onChange={handleInput} />
            <input name="password" type="password" placeholder="Aqui, sua senha" onChange={handleInput} />
            <Button>Entrar</Button>
          </Form>
        </AuthContainer>
      </AuthLayout>
      <CreaStripePattern position="footer"/>
    </Wrapper>
  );
}

const AuthContainer = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;

  >h1 {
    font-family: 'Amatic SC', cursive;
    font-size: 40px;
    font-weight: 700;
    color: #7c7b7b;
    margin-bottom: 35px;
  }

  > img {
    width: 80%;
    height: 40%;
    object-fit: contain;
  }
`;
