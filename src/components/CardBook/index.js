import React, { useState } from 'react'
import noImage from '../../assets/img/no-image.svg';
import { Title, Author, Informacoes, Card } from './style'
import { getBooksId } from "../../services/services";
import ModalBookDetails from './ModalBookDetails';

const CardBook = ({ book }) => {

    const [openModal, setOpenModal] = React.useState(false);
    const [booksDetails, setBooksDetails] = useState([]);

    const loadBooksDetails = (id) => {
        if (!openModal) {
            getBooksId(id)
                .then(result => {
                    if (result.data) {
                        setBooksDetails(result.data);
                        setOpenModal(true);
                    }
                }).catch(e => {
                    console.log(e);
                })
        }
    }

    return (
        <Card onClick={() => { loadBooksDetails(book.id) }}>
            <Card.Body>
                <Card.Image>
                    {
                        book.imageUrl ?
                            <img style={{ width: '100%' }} src={book.imageUrl} /> :
                            <img style={{ width: '100%' }} src={noImage} />
                    }
                </Card.Image>
                <div>
                    <Title>{book.title}</Title>
                    {book.authors.slice(0, 2).map((author, key) => {
                        return (
                            <div key={key}>
                                <Author>{author}</Author>
                            </div>
                        )
                    })}
                    <Card.Info>
                        <Informacoes>{book.pageCount} páginas</Informacoes>
                        <Informacoes>{book.publisher}</Informacoes>
                        <Informacoes>Publicado em {book.published}</Informacoes>
                    </Card.Info>
                </div>
            </Card.Body>
            {openModal &&
                <ModalBookDetails
                    setOpenModal={(data) => setOpenModal(data)}
                    openModal={openModal}
                    booksDetails={booksDetails}
                />
            }
        </Card>
    )
}
export default CardBook
