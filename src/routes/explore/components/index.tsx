import { useSearchParams } from "react-router-dom";
import Category from "./widgets/cateogory";
import QueryEditor from "./widgets/query-editor";
import Mint from "./widgets/mint";

export default function Components() {
  const [searchParams] = useSearchParams();
  const categoryName = searchParams.get("category");
  const isUserHaveNFT = !false;
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {isUserHaveNFT ? (
        <div>
          {categoryName === "zk" || categoryName === "account-abstraction" ? (
            <QueryEditor />
          ) : (
            <Category />
          )}
        </div>
      ) : (
        <Mint />
      )}
    </div>
  );
}
