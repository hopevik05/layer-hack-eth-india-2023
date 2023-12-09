import { useEffect, useState } from "react";
import { getChecksumAddress, initializeContract } from "../../common/utils";
import useAccount from "../../common/hooks/useAccount";
import { toast } from "react-toastify";

const initialDetails = {
  loading: false,
  whitelisted: false,
  isOwner: false,
};
function useContract() {
  const [userDetails, setUserDetails] = useState(initialDetails);
  const [loading, setLoading] = useState(false);
  const { account, provider } = useAccount();

  const getDetails = async (provider: any) => {
    try {
      setUserDetails(initialDetails);
      const contract = initializeContract(provider);
      const isWhitelisted = await contract.whitelist(account);
      const owner = await contract.owner();
      const isOwner = getChecksumAddress(owner) === getChecksumAddress(account);
      setUserDetails({
        whitelisted: isWhitelisted || isOwner,
        loading: false,
        isOwner,
      });
    } catch (error) {
      console.log("get details error", error);
    }
  };

  const addOrRemoveUser = async (user: string) => {
    try {
      if (provider) {
        setLoading(true);
        const contract = initializeContract(provider);
        const isWhitelisted = await contract.whitelist(user);
        const result = await contract[
          isWhitelisted ? "removeFromWhitelist" : "addToWhitelist"
        ](user);
        await result.wait();
        toast.success(
          isWhitelisted
            ? "User removed successfully!"
            : "User added successfully!"
        );
      }
    } catch (error: any) {
      console.log("error", error);
      setLoading(false);
      toast.error(error?.message || "Something went wrong, try again!");
    }
  };

  useEffect(() => {
    if (account && provider) {
      getDetails(provider);
    }
  }, [account]);
  return {
    userDetails,
    account,
    addOrRemoveUser,
    loading,
  };
}
export default useContract;
