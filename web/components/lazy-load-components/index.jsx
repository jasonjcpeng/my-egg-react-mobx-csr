import React from "react";
import loadable from "@loadable/component";

const LazyLoadComponents = function (call) {
  return loadable(call, {
    fallback: <div></div>
  })
}

export default LazyLoadComponents;