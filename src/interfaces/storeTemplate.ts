import { cashRegisterTemplate, CashRegisterIT } from "interfaces/Cashregister";

export type AppInterface = {
  showMenu: boolean;
  CashRegister: CashRegisterIT;
};
export const appTemplate: AppInterface = {
  showMenu: false,
  CashRegister: cashRegisterTemplate,
};

export interface StoreInterface {
  app: AppInterface;
}
export const storeTemplate: StoreInterface = {
  app: appTemplate,
};
