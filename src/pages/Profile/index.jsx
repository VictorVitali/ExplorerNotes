import { FiArrowLeft, FiUser, FiLock, FiMail, FiCamera} from 'react-icons/fi'
import {Input} from '../../components/Input'
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button'
import { Container, Form, Avatar } from "./style";
export function Profile(){
    return(
        <Container>
            <header>
                <Link to="/"> <FiArrowLeft/> </Link>

            </header>
            <Form>
                <Avatar>
                    <img alt='Foto do Usuário' src='https://github.com/victorvitali.png'/>
                    <label htmlFor="avatar"><FiCamera/>
                    <input id="avatar" type="file"/>
                    </label>
                    </Avatar>
                <Input placeholder="Nome" type="text" icon={FiUser} />
                <Input placeholder="E-mail" type="text" icon={FiMail} />
                <Input placeholder="Senha atual" type="password" icon={FiLock} />
                <Input placeholder="Nova Senha" type="password" icon={FiLock} />
                <Button title="Salvar"/>
            </Form>
        </Container>
    )
}