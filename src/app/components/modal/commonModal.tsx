import React from "react";
import styled from "styled-components";
import {useSelector} from "react-redux";

const CommonModalDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;  
  border-radius: 12px;
  margin: 300px 20px;
  padding: 30px 16px 16px;  
  opacity: 1;
  transition: all 0.2s ease-in-out;
  background-color: rgba(249, 249, 249, 0.85);
`;

const Button = styled.button`
    padding: 10px 10px;
    border: 1px solid rgba(0,0,0,0.5);
    border-radius: 10px;
    background-color: rgb(223, 223, 243);
`;

const CommonModal = () => {
    const modalStatus = useSelector((state: any) => state.modals);

    return (
        <CommonModalDiv>
            <h4>Modal Title</h4>
            <div>
                <Button type="button" onClick={() => modalStatus.method()}>button</Button>
            </div>
        </CommonModalDiv>
    );
};

export default CommonModal;