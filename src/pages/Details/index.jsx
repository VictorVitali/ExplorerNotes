import { Container, Links, Content } from './style.js';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../../service/api.js';
import { useState, useEffect } from 'react';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tags';
import { ButtonText } from '../../components/ButtonText';

export function Details() {
  const [data, setData] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  };

  async function handleRemove() {
    const confirm = window.confirm("Are you sure you want to remove this note?");

    if (confirm) {

      await api.delete(`/notes/${params.id}`);
      navigate(-1);

    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }
    
    fetchNote();
  }, []);

  return (
    <Container>
      <Header />
      {data &&
        <main>
          <Content>
            <ButtonText title="Excluir nota" onClick={handleRemove} />
            <h1> {data.note.title} </h1>
            <p>{data.note.description}</p>

            {
              data.links &&

              < Section title="Links Uteis">
                <Links>
                  {
                    data.links.map(link => (
                      <li key={String(link.id)}>
                        <a href={link.url} target="_blank">
                          {link.url}
                        </a>
                      </li>
                    ))
                  }
                </Links>
              </Section>
            }


            {
              data.tags &&

              <Section title="Marcadores">
                {
                  data.tags.map(tag => (
                    <Tag key={tag.id} title={tag.name} />
                  ))
                  }
              </Section>
            }
            <Button title="Voltar" onClick={handleBack} />
          </Content>
        </main>

      }
    </Container >

  )
}
