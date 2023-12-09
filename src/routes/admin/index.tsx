import React from "react";
import AppLayout from "../../common/components/layout";
import "../../assets/css/index.css";
import Components from "./components";

function AdminPage() {
  return (
    <AppLayout>
      <Components />
    </AppLayout>
  );
}

export default React.memo(AdminPage);
