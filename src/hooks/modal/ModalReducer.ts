// Modal State Type
export interface ModalStateType {
  addEmployee: boolean;
  loginUser: boolean;
  registerUser: boolean;
}

// Modal Action Type
export interface ModalActionType {
  type:
    | 'openAddEmployee'
    | 'closeAddEmployee'
    | 'openLoginUser'
    | 'closeLoginUser'
    | 'openRegisterUser'
    | 'closeRegisterUser';
}

// Modal Initial State
export const ModalInitState: ModalStateType = {
  addEmployee: false,
  loginUser: false,
  registerUser: false,
};

// Modal Reducer
export const ModalReducer = (
  state: ModalStateType,
  action: ModalActionType
): ModalStateType => {
  switch (action.type) {
    case 'openAddEmployee': {
      return {
        ...state,
        addEmployee: true,
      };
    }
    case 'closeAddEmployee': {
      return {
        ...state,
        addEmployee: false,
      };
    }
    case 'openLoginUser': {
      return {
        ...state,
        loginUser: true,
      };
    }
    case 'closeLoginUser': {
      return {
        ...state,
        loginUser: false,
      };
    }
    case 'openRegisterUser': {
      return {
        ...state,
        registerUser: true,
      };
    }
    case 'closeRegisterUser': {
      return {
        ...state,
        registerUser: false,
      };
    }
    default:
      return state;
  }
};