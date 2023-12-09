import x from "../../../assets/icons/x.svg";
import telegram from "../../../assets/icons/telegram.svg";
import discord from "../../../assets/icons/discord.svg";

const social = [
  {
    href: "https://twitter.com/LayerHack",
    icon: <img src={x} alt="" />,
  },
  {
    href: "https://t.me/+UHkJ8DK_rEc2MDZl",
    icon: <img src={telegram} alt="" />,
  },
  {
    href: "https://discord.gg/wQTSxTRbfK",
    icon: <img src={discord} alt="" />,
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-12 sm:py-24 lg:px-8">
        <p className="head text-center">Let's Connect!</p>
        <div className="mt-10 flex justify-center space-x-6">
          {social.map((item) => (
            <a href={item.href} target="_blank" className="primary-btn px-4 items-center flex">
              {item.icon}
            </a>
          ))}
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-black">
          @LayerHack | A project by LayerDigi | All rights reserved
        </p>
      </div>
    </footer>
  );
}
