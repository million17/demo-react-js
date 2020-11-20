import React from "react";
import { Route } from "react-router-dom";
import {router} from "./../../router";



// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <>
      {router.map((item) => {
        return (
            <Route exact path={item.path} component={item.component}/>
        )
    })}
    </>
  );
};
