import React, { useEffect, useState } from 'react'
import background from '../../assets/img/background-home.png';
import { CircularProgress } from '@material-ui/core';
import { Background, Container, CardBody } from './style'
import { getBooks } from "../../services/services";
import { CardBook, HeaderComponent } from '../../components/';
import { checkLogout401 } from '../../services/auth';

const Home = () => {

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        loadBooks();
    }, []);

    const loadBooks = () => {
        getBooks({ page: 1, amount: 12, category: 'biographies' })
            .then(result => {
                if (result.data) {
                    setBooks(result.data.data);
                    setLoading(false);
                }
            }).catch(e => {
                setLoading(false);
                console.log(e);
                checkLogout401(e);
            })
    }

    return (
        <Background backgroundImage={background}>
            <Container>
                <HeaderComponent />
                <CardBody>
                    {!loading ?
                        books.map((book, key) => {
                            return (
                                <CardBook key={key} book={book} />
                            )
                        }) :
                        <CardBody.Progress>
                            <CircularProgress color='secondary' />
                        </CardBody.Progress>
                    }
                </CardBody>
            </Container>
        </Background>
    )
}

export default Home
