import styled from 'styled-components';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import axios from 'axios';

import logo from "./../../images/logo.png"

export default function Login() {
    const navigate = useNavigate();
    const url = "https://llrb-crew.herokuapp.com/login";

    const [loading, setLoading] = useState("Entrar");
    const [user, setUser] = useState({name: "", email: "", password: ""});

    function load() {
        setLoading(<ThreeDots color="#FFFFFF" height={50} width={50} />);

        const loginRequisition = axios.post(url, user);
        loginRequisition.then(response => {
            const token = response.data;
            localStorage.setItem("token", token);
            
            navigate('/about', { replace: true })
        });
        loginRequisition.catch(() => {
            alert("Erro! Usuário ou senha inválidos!");
            setLoading("Entrar");
        });
    }

    return (
        <LoginBody>
            <Logo src={logo} />
            <Input type="text" placeholder="Digite seu nome" value={user.name} onChange={e => {
            const obj = {...user};
            obj.name = e.target.value;
            setUser({...obj});
            }} />
            <Input type="text" placeholder="Digite seu email" value={user.email} onChange={e => {
            const obj = {...user};
            obj.email = e.target.value;
            setUser({...obj});
            }} />
            <Input type="password" placeholder="Digite sua senha" value={user.password} onChange={e => {
            const obj = {...user};
            obj.password = e.target.value;
            setUser({...obj});
            }} />
            <Button onClick={() => load()}>{loading}</Button>
        </LoginBody>
    );
}

const LoginBody = styled.div`
    width: 100vw;
    height: 100vh;
    background: #180B40;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Logo = styled.img`
    width: 191px;
    height: 121px;
    margin-bottom: 20px;
`;

const Input = styled.input`
    box-sizing: border-box;
    width: 260px;
    height: 45px;
    background: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 5px;
    padding-left: 15px;
    margin-bottom: 13px;
    font-family: 'Raleway';
    font-weight: 400;
    font-size: 14px;
    line-height: 15px;
    color: #000000;

    ::placeholder {
    font-family: 'Raleway';
    font-weight: 600;
    font-size: 17px;
    line-height: 18px;
    color: #000000;
    }
`;

const Button = styled.button`
    box-sizing: border-box;
    width: 260px;
    height: 45px;
    background: #12CDD4;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 5px;
    margin-bottom: 36px;
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 17px;
    line-height: 18px;
    color: #FFFFFF;
`;