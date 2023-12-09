import React from "react";
import AppLayout from "../../common/components/layout";
import { HomeComponents } from "./components";
import "../../assets/css/index.css";

function LayerHack() {
  return (
    <AppLayout>
      <HomeComponents />
    </AppLayout>
  );
}

export default React.memo(LayerHack);
