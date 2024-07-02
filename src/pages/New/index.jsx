import { Container, Form } from "./style";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/Noteitem";
import { Link } from 'react-router-dom';
import { Section } from "../../components/Section";
import {Button} from "../../components/Button";

export function New() {
    return (
        <Container>
            <Header />
            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to="/">Voltar</Link>
                    </header>
                    <Input placeholder="Titulo" />
                    <Textarea placeholder="Observações" />
                    <Section title="Links uteis">

                    </Section>

                    <Section title="Marcadores">
                        <div className="tags">
                            <NoteItem value="react" />
                            <NoteItem isNew placeholder="Nova Tag" />
                        </div>                
                    </Section>
                    <Button title="Salvar"/>
                </Form>
            </main>
        </Container>
    );
}