import { Container, Profile, Logout } from "./style";
import { RiShutDownLine } from 'react-icons/ri';
import { api } from "../../service/api";
import { useAuth } from '../../hooks/auth';
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';


export function Header() {
    const { user, signOut } = useAuth();
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    return (
        <Container>
            <Profile to="/profile">
                <img src={avatarUrl} alt='Foto do Usuário' />
                <div>
                    <span>Bem vindo!</span>
                    <strong>{user.name}</strong>
                </div>
            </Profile>
            <Logout onClick={signOut}>
                <RiShutDownLine />
            </Logout>

        </Container>
    );
}