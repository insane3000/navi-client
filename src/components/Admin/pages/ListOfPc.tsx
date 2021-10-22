import React from "react";
import { Switch, Route } from "react-router-dom";
import Addpc from "../organisms/AddPc";
import Maintenance from "./Maintenance";
import EditPc from "../organisms/EditPc";
import WatchPc from "../organisms/WatchPc";
const ListOfPc = () => {
  return (
    <Switch>
      <Route path="/admin/maintenance" exact component={Maintenance} />
      <Route path="/admin/maintenance/add-pc" exact component={Addpc} />
      <Route path="/admin/maintenance/watch/:id" exact component={WatchPc} />
      <Route path="/admin/maintenance/edit/:id" exact component={EditPc} />
    </Switch>
  );
};

export default ListOfPc;
