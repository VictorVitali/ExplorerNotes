import { useState } from 'react';
import { useAuth } from '../../hooks/auth'
import { FiArrowLeft, FiUser, FiLock, FiMail, FiCamera } from 'react-icons/fi'
import { Input } from '../../components/Input'
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button'
import { Container, Form, Avatar } from "./style";

export function Profile() {
    const { user, updateProfile } = useAuth();
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [PasswordOld, setPasswordOld] = useState();
    const [PasswordNew, setPasswordNew] = useState();

    const [avatar, setAvatar] = useState(user.avatar);
    const [avatarFile, setAvatarFile] = useState(null);

    async function handleUpdate() {
        const user = {
            name,
            email,
            password: PasswordNew,
            old_password: PasswordOld,
        }

        await updateProfile({ user, avatarFile });
    }

    //  function handleChangeAvatar(event){
    //     const file = event.target.files[0];
    //      setAvatarFile(file);
    //      const imagePreview = URL.createObjectURL(file);
    //      setAvatar(imagePreview);
    //   }

    return (
        <Container>
            <header>
                <Link to="/"> <FiArrowLeft /> </Link>

            </header>
            <Form>
                <Avatar>
                    <img alt='Foto do Usuário' src={avatar} />
                    <label htmlFor="avatar"><FiCamera />
                        <input id="avatar" type="file"
                       // onChange={handleChangeAvatar}
                          />
                    </label>
                </Avatar>
                <Input placeholder="Nome" type="text" icon={FiUser} value={name} onChange={e => setName(e.target.value)} />
                <Input placeholder="E-mail" type="text" icon={FiMail} value={email} onChange={e => setEmail(e.target.value)} />
                <Input placeholder="Senha atual" type="password" icon={FiLock} onChange={e => setPasswordOld(e.target.value)} />
                <Input placeholder="Nova Senha" type="password" icon={FiLock} onChange={e => setPasswordNew(e.target.value)} />
                <Button title="Salvar" onClick={handleUpdate} />
            </Form>
        </Container>
    )
}