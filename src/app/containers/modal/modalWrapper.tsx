import React from 'react';
import styled from 'styled-components';
import {useSelector, useDispatch} from "react-redux";
import {dropModal} from "../../modules/modals";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.4);
  z-index: 100;
`;

const ModalWrapper = ()=> {
    const modalStatus = useSelector((state: any) => state.modals);
    const dispatch = useDispatch();

    const modalOff = (e: any) => {
        e.stopPropagation();
        if (e.target !== e.currentTarget) {
            return;
        }
        dispatch(dropModal());
    };

    return (
        <>
            {
                modalStatus.show &&
                <Container onClick={(e) => modalOff(e)}>
                    <modalStatus.element/>
                </Container>}
        </>
    );
}

export default ModalWrapper;