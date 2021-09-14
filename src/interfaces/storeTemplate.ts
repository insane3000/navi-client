export type AppInterface = {
  showMenu: boolean;
};
export const appTemplate: AppInterface = {
  showMenu: false,
};

export interface StoreInterface {
  app: AppInterface;
}
export const storeTemplate: StoreInterface = {
  app: appTemplate,
};
