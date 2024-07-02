import { Container } from './style.js';

export function Button({title, loading = false}) {
    return(
    <Container
        type="button"
        disabled={loading}
    >
        {loading ? "Carregando..." : title}
        </Container>
    );
}