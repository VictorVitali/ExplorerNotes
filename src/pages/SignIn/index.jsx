import { Container, Form, Background } from "./style";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { FiMail, FiLock } from "react-icons/fi"
import { Input } from "../../components/Input";
import { useAuth } from "../../hooks/auth";

export function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { signIn } = useAuth();

    function handleSignIn(){
        signIn({ email, password });
    }

    function handleSubmit(event) {
        event.preventDefault();
        handleSignIn();
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úties.</p>
                <h2>Faça seu login</h2>
                <Input placeholder="E-mail" type="text" icon={FiMail} onChange={ e => setEmail(e.target.value)}/>
                <Input placeholder="Senha" type="password" icon={FiLock} onChange={ e => setPassword(e.target.value)}/>
                <Button title="Entrar" type="submit" onClick={handleSignIn}> </Button>
                <Link to="/register">Criar Conta</Link>
            </Form>
            <Background />
        </Container>
    )
}