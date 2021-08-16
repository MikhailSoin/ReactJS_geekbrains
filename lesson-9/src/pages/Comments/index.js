import { Header } from '../../components/Header';
import { CommentsContainer } from '../../containers/CommentsContainer';

import Container from '@material-ui/core/Container';


export function Comments() {
    return(
        <Container maxWidth="lg">
            <Header/>
            <h1>
                Комментарии
            </h1>
            < CommentsContainer />
        </Container>
    );
};