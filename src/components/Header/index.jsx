import { Container, Profile, Logout} from "./style";
import {RiShutDownLine} from 'react-icons/ri';

export function Header(){
    return (
        <Container>
            <Profile to="/profile">
                <img src='https://github.com/victorvitali.png' alt='Foto do Usuário'/>
                <div>
                    <span>Bem vindo!</span>
                    <strong>Victor Vitali</strong>
                </div>
            </Profile>
            <Logout>
                <RiShutDownLine />
            </Logout>

        </Container>
    );
}