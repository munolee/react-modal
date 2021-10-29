//## Actions Types
const SHOW_MODAL = 'modal/SHOW_MODAL' as const;
const DROP_MODAL = 'modal/DROP_MODAL' as const;

export type modalActionType =
    | ReturnType<typeof showModal>
    | ReturnType<typeof dropModal>;

//## Actions
export const showModal = (element: () => JSX.Element, method?: () => void)=> ({type: SHOW_MODAL, payload: {element, method}});
export const dropModal = () => ({type: DROP_MODAL});

type modalStateType = {
    show: boolean;
    element: Function | null;
    method?: Function | null;
}

//## InitialState
export const initialState = {
    show: false,   //### Modal Show?
    element: null, //### Modal Component
    method: null   //### Modal Method
};

//## Reducer
const modalReducer = (state: modalStateType = initialState, action: modalActionType) => {
    switch(action.type) {
        case SHOW_MODAL:
            return {
                ...state,
                show: true,
                element: action.payload.element,
                method: action.payload.method
            };
        case DROP_MODAL:
            return initialState;
        default:
            return state;
    }
}

export default modalReducer;