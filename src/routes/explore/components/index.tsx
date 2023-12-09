import { useSearchParams } from "react-router-dom";
import useContract from "../../../common/hooks/useContract";
import Category from "./widgets/cateogory";
import Mint from "./widgets/mint";
import QueryEditor from "./widgets/query-editor";
import WalletButton from "../../../common/components/wallet/wallet-button";
import { Spin } from "antd";

export default function Components() {
  const [searchParams] = useSearchParams();
  const {
    userDetails: { whitelisted, loading },
    account,
  } = useContract();

  const categoryName = searchParams.get("category");

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <Spin spinning={loading}>
        {account ? (
          <div>
            {whitelisted ? (
              <div>
                {categoryName === "zk" ||
                categoryName === "account-abstraction" ? (
                  <QueryEditor />
                ) : (
                  <Category />
                )}
              </div>
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
    </div>
  );
}
