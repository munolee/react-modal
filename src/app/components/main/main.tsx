import React from 'react';
import styled from "styled-components";
import {useDispatch} from "react-redux";
import {dropModal, showModal} from "../../modules/modals";
import CommonModal from "../modal/commonModal";

const MainDiv = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
`;

const Button = styled.button`
    padding: 10px 10px;
    border: 1px solid rgba(0,0,0,0.5);
    border-radius: 10px;
    background-color: rgb(223, 223, 243);
`;

const Main = () => {
    const dispatch = useDispatch();

    const handleShowModal = (type: string) => {
        dispatch(showModal(CommonModal, type === 'temp01' ? tempMethod01 : tempMethod02));
    };

    const tempMethod01 = () => {
        console.log('method01');
        dispatch(dropModal());
    };

    const tempMethod02 = () => {
        console.log('method02');
        dispatch(dropModal());
    };

    return (
        <MainDiv>
            <Button type="button" onClick={() => handleShowModal('temp01')}>modal 01</Button>
            <Button type="button" onClick={() => handleShowModal('temp02')}>modal 02</Button>
        </MainDiv>
    );
};

export default Main;