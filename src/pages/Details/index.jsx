import { Container, Links, Content } from './style.js';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tags';
import { ButtonText } from '../../components/ButtonText';

export function Details() {
  

  return(
    <Container>
      <Header />

      <main>
        <Content>
      <ButtonText title="Excluir nota"/>
      <h1> Introdução ao React </h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam molestias neque, unde, accusamus officiis, impedit sit facere nam repellat aliquid dicta eos autem quos libero quod illum optio necessitatibus id!</p>

      <Section title="Links Uteis">
        <Links>
        <li><a href='https://www.rocketseat.com.br/'>https://www.rocketseat.com.br/</a></li>
        <li><a href='https://www.rocketseat.com.br/'>https://www.rocketseat.com.br/</a></li>
        </Links>
      </Section>

      <Section title="Marcadores">
        <Tag title="express" />
        <Tag title="nodejs" />
      </Section>

      <Button title="Voltar"/>
      </Content>
      </main>
    </Container>
  )
}
