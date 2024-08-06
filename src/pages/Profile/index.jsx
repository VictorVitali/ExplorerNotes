import { useState } from 'react';
import { useAuth } from '../../hooks/auth'
import { FiArrowLeft, FiUser, FiLock, FiMail, FiCamera } from 'react-icons/fi'
import { Input } from '../../components/Input'
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button'
import { api }  from '../../service/api';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';
import { Container, Form, Avatar } from "./style";

export function Profile() {
    const { user, updateProfile } = useAuth();
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [PasswordOld, setPasswordOld] = useState();
    const [PasswordNew, setPasswordNew] = useState();
    const navigate = useNavigate();


    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;    
    const [avatar, setAvatar] = useState(avatarUrl);
    const [avatarFile, setAvatarFile] = useState(null);

    async function handleUpdate() {
        const updated = {
            name,
            email,
            password: PasswordNew,
            old_password: PasswordOld,
        }
        const userUpdated = Object.assign(user, updated);

        await updateProfile({ user: userUpdated, avatarFile });
    }

    function handleChangeAvatar(event) {
        const file = event.target.files[0];
        setAvatarFile(file);
        const imagePreview = URL.createObjectURL(file);
        setAvatar(imagePreview);
    }

    function handleBack() {
        navigate(-1);
      };

    return (
        <Container>
            <header>

                <button onClick={handleBack}> <FiArrowLeft /> </button>

            </header>
            <Form>
                <Avatar>
                    <img alt='Foto do Usuário' src={avatar} />

                    <label htmlFor="avatar"><FiCamera />
                        <input id="avatar" 
                        type="file" 
                        onChange={handleChangeAvatar}
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