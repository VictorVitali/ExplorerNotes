import { Container, Form } from "./style";
import { useState } from "react";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/Noteitem";
import { Link } from 'react-router-dom';
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { api } from "../../service/api";
import { useNavigate } from "react-router-dom";

export function New() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const [links, setLinks] = useState([]);
    const [newLink, setNewLink] = useState("");

    const [tags, setTags] = useState([]);
    const [newTags, setNewTags] = useState("");

    const navigate = useNavigate();

    function handleAddLink() {
        setLinks(prevState => [...prevState, newLink])
        setNewLink("");
    };
    function handleRemoveLink(deleted) {
        setLinks(prevState => prevState.filter(link => link !== deleted));
    }

    function handleAddTags() {
        setTags(prevState => [...prevState, newTags]);
        setNewTags("");
    }
    function handleRemoveTag(deleted) {
        setTags(prevState => prevState.filter(tags => tags !== deleted));
    }

    async function handleNewNote() {
        if (!title) {
            alert("Please enter a title");
        }
        if (newLink) {
            alert("Favor clicar no + para adicionar o Link");
        }
        if (newTags) {
            alert("Favor clicar no + para adicionar a Tag");
        }

        await api.post("/notes", {
            title,
            description,
            tags,
            links
        });
        alert("Nota criada com sucesso");
        navigate(-1);
    }

    return (
        <Container>
            <Header />
            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to="/">Voltar</Link>
                    </header>
                    <Input placeholder="Titulo"
                        onChange={e => setTitle(e.target.value)} />

                    <Textarea placeholder="Observações"
                        onChange={e => setDescription(e.target.value)} />

                    <Section title="Links uteis">
                        {links.map((link, index) => (
                            <NoteItem
                                key={String(index)}
                                value={link}
                                onClick={() => handleRemoveLink(link)} />
                        ))}

                        <NoteItem isNew
                            placeholder="Novo Link"
                            value={newLink}
                            onChange={e => setNewLink(e.target.value)}
                            onClick={handleAddLink} />
                    </Section>

                    <Section title="Marcadores">
                        <div className="tags">

                            {
                                tags.map((tags, index) => (
                                    <NoteItem
                                        key={String(index)}
                                        value={tags}
                                        onClick={() => handleRemoveTag(tags)} />
                                ))
                            }

                            <NoteItem
                                isNew
                                placeholder="Nova Tag"
                                onChange={e => setNewTags(e.target.value)}
                                value={newTags}
                                onClick={handleAddTags} />
                        </div>

                    </Section>
                    <Button title="Salvar" onClick={handleNewNote} />
                </Form>
            </main>
        </Container>
    );
}