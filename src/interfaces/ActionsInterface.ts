import { ActionType } from "redux/types";

interface showMenu {
  type: ActionType.SHOW_MENU;
  payload: boolean;
}

export type ActionsInterface = showMenu;
