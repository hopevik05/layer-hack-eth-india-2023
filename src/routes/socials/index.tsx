import React from "react";
import "../../assets/css/index.css";
import AppLayout from "../../common/components/layout";
import useContract from "../../common/hooks/useContract";
import Components from "./components";
import WalletButton from "../../common/components/wallet/wallet-button";
import { Spin } from "antd";
function SocialsPage() {
  const {
    userDetails: { whitelisted, loading },
    account,
  } = useContract();
  return (
    <AppLayout>
      <Spin spinning={loading}>
        {account ? (
          <div>
            {whitelisted ? (
              <Components />
            ) : (
              <div className="relative mb-10">
                <div
                  style={{ height: 570 }}
                  className="overflow-auto px-5 flex items-center justify-center max-h-full rounded-lg border border-gray-300 shadow-sm"
                >
                  <p className="font-semibold">
                    You are not whitelisted to access LayerHack.{" "}
                    <a
                      href="https://discord.gg/wQTSxTRbfK"
                      className="text-blue-700 underline"
                      target="blank"
                    >
                      Join discord{" "}
                    </a>
                    to learn more...
                  </p>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="relative mb-10">
            <div
              style={{ height: 570 }}
              className="overflow-auto px-5 flex items-center justify-center max-h-full rounded-lg border border-gray-300 shadow-sm"
            >
              <WalletButton />
            </div>
          </div>
        )}
      </Spin>
    </AppLayout>
  );
}

export default React.memo(SocialsPage);
