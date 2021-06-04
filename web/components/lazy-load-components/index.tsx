import React from "react";
import loadable from "@loadable/component";

const LazyLoadComponents = function (call: any): any {
  return loadable(call, {
    fallback: <div></div>,
  });
};

export default LazyLoadComponents;
