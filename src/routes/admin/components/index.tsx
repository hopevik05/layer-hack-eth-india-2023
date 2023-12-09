import { Spin } from "antd";
import WalletButton from "../../../common/components/wallet/wallet-button";
import useContract from "../../../common/hooks/useContract";
import AddRemoveUsers from "./widgets/add-remove-user";

export default function Components() {
  const {
    userDetails: { isOwner, loading },
    account,
    loading: loadingAction,
    addOrRemoveUser,
  } = useContract();

  return (
    <div className="relative mb-10">
      <div
        style={{ height: 570 }}
        className="overflow-auto px-5 flex items-center justify-center max-h-full rounded-lg border border-gray-300 shadow-sm"
      >
        <Spin spinning={loading}>
          {account ? (
            <div>
              {isOwner ? (
                <AddRemoveUsers
                  loading={loading}
                  addOrRemoveUser={addOrRemoveUser}
                />
              ) : (
                <p className="font-semibold">
                  You're not authorize to access this page.
                </p>
              )}
            </div>
          ) : (
            <WalletButton />
          )}
        </Spin>
      </div>
    </div>
  );
}
