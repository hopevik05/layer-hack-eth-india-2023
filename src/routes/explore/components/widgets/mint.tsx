import { useNavigate } from "react-router-dom";
import arrow from "../../../../assets/icons/arrow.svg";
import { APP_ROUTES } from "../../../../common/constants";

export default function Mint() {
  const isWhitelisted = !false;
  return (
    <div className="relative mb-10">
      <div
        style={{ height: 570 }}
        className="overflow-auto px-5 flex items-center justify-center max-h-full rounded-lg border border-gray-300 shadow-sm"
      >
        <div className="h-full flex items-center">
          {isWhitelisted ? (
            <button
              className="primary-btn m-4 px-6 flex mx-auto items-center"
              // onClick={() => navigate(item.link)}
            >
              Mint NFT to Explore <img className="ml-2" src={arrow} alt="" />
            </button>
          ) : (
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
          )}
        </div>
      </div>
    </div>
  );
}
