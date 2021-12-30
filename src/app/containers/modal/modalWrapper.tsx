import React, {useEffect} from 'react';
import styled from 'styled-components';
import {useSelector, useDispatch} from "react-redux";
import {dropModal} from "../../modules/modals";
import {CSSTransition} from "react-transition-group";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  visibility: hidden;
  z-index: 100;
  
  &.active {
    visibility: visible;
    background-color: rgba(0,0,0,0.4);
  }
  
   .modal-enter {
        opacity: 0;
        transform: scale(0.7);
   }
   .modal-enter-active {
        opacity: 1;
        transform: scale(1);
        transition: all 0.2s ease-in-out;
   }
   .modal-exit {
       opacity: 1;
       transform: scale(1);
   }
   .modal-exit-active {
       opacity: 0;
       transform: scale(0.7);
       transition: all 0.2s ease-in-out;
   }
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
            <Container className={modalStatus.show ? " active" : ""} onClick={(e) => modalOff(e)}>
                <CSSTransition in={modalStatus.show} mountOnEnter unmountOnExit timeout={700} classNames={"modal"}>
                    {modalStatus.element ? <modalStatus.element/> : <></>}
                </CSSTransition>
            </Container>
        </>
    );
}

export default ModalWrapper;