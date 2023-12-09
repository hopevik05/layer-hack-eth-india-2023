import React from "react";
import AppLayout from "../../common/components/layout";
import "../../assets/css/index.css";
import Components from "./components";

function ExplorePage() {
  return (
    <AppLayout>
      <Components />
    </AppLayout>
  );
}

export default React.memo(ExplorePage);
