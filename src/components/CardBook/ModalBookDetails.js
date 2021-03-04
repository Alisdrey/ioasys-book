import React, { useEffect, useState } from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {
    Author,
    ModalBody,
    ModalImage,
    ModalInfo,
    ModalDetails,
    ModalReview
} from './style'
import noImage from '../../assets/img/no-image.svg';
import quotes from '../../assets/icon/icon-quotes.svg';


export default function ModalBookDetails({
    setOpenModal,
    openModal,
    booksDetails
}) {

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className="modal-book"
                open={openModal}
                onClose={() => setOpenModal(false)}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openModal}>
                    <div className='modal-details-book'>
                        <button
                            className={"btn-cancel-modal"}
                            onClick={() => setOpenModal(false)}
                        >
                            X
                        </button>

                        <ModalBody>
                            <ModalImage>
                                {
                                    booksDetails.imageUrl ? <img style={{ width: '100%' }} src={booksDetails.imageUrl} /> :
                                        <img style={{ width: '100%' }} src={noImage} />
                                }
                            </ModalImage>
                            <ModalInfo>
                                <ModalInfo.Title>{booksDetails.title}</ModalInfo.Title>
                                <div style={{ display: 'flex' }}>
                                    {booksDetails.authors.map((author, key) => {
                                        return (
                                            <div key={key}>
                                                <Author>{author} </Author>
                                            </div>
                                        )
                                    })}
                                </div>

                                <p className="lb-inf">Informações</p>

                                <ModalDetails>
                                    <ModalDetails.LabelLeft>Páginas</ModalDetails.LabelLeft>
                                    <ModalDetails.LabelRight>{booksDetails.pageCount} páginas</ModalDetails.LabelRight>
                                </ModalDetails>
                                <ModalDetails>
                                    < ModalDetails.LabelLeft>Editora</ ModalDetails.LabelLeft>
                                    <ModalDetails.LabelRight>Editora {booksDetails.publisher}</ModalDetails.LabelRight>
                                </ModalDetails>
                                <ModalDetails>
                                    < ModalDetails.LabelLeft>Publicação</ModalDetails.LabelLeft>
                                    <ModalDetails.LabelRight>{booksDetails.published}</ModalDetails.LabelRight>
                                </ModalDetails>
                                <ModalDetails>
                                    < ModalDetails.LabelLeft>Idioma</ModalDetails.LabelLeft>
                                    <ModalDetails.LabelRight>{booksDetails.language}</ModalDetails.LabelRight>
                                </ModalDetails>
                                <ModalDetails>
                                    < ModalDetails.LabelLeft>Título Original</ModalDetails.LabelLeft>
                                    <ModalDetails.LabelRight>304 páginas</ModalDetails.LabelRight>
                                </ModalDetails>
                                <ModalDetails>
                                    <ModalDetails.LabelLeft>ISBN-10</ModalDetails.LabelLeft>
                                    <ModalDetails.LabelRight>{booksDetails.isbn10}</ModalDetails.LabelRight>
                                </ModalDetails>
                                <ModalDetails>
                                    <ModalDetails.LabelLeft>ISBN-13</ModalDetails.LabelLeft>
                                    <ModalDetails.LabelRight>{booksDetails.isbn13}</ModalDetails.LabelRight>
                                </ModalDetails>

                                <ModalReview>
                                    <p className="lb-inf">Resenha da Editora</p>
                                    <ModalReview.Label>
                                        <ModalReview.Icon src={quotes} /> {' '}
                                        {booksDetails.description}
                                    </ModalReview.Label>
                                </ModalReview>
                            </ModalInfo>
                        </ModalBody>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
