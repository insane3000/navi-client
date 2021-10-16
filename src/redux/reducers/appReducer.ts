import { ActionType } from "redux/types";
import { ActionsInterface } from "interfaces/ActionsInterface";
//* INTERFACE APP
import { AppInterface, appTemplate } from "interfaces/storeTemplate";

const initialState: AppInterface = appTemplate;

const appReducer = (state = initialState, action: ActionsInterface) => {
  // console.log(action);
  switch (action.type) {
    case ActionType.SHOW_MENU:
      return {
        ...state,
        showMenu: action.payload,
      };
    case ActionType.LOGIN:
      return {
        ...state,
        login: { ...state.login, user: action.user, token: action.token },
      };
    default:
      return state;
  }
};

export default appReducer;
