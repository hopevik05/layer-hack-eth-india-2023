import { useNavigate } from "react-router-dom";
import arrow from "../../../../assets/icons/arrow.svg";
import { APP_ROUTES } from "../../../../common/constants";

export default function Category() {
  const navigate = useNavigate();
  const category = [
    {
      key: 1,
      name: "Zero knowledge",
      link: `${APP_ROUTES.explore}?category=zk`,
      title:
        "It refers to a proof or protocol where one party can prove to another that they know a specific piece of information without revealing the information itself. ",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      key: 2,
      name: "Account abstraction",
      title:
        "Account abstraction allows users to use smart contracts as their accounts.",
      link: `${APP_ROUTES.explore}?category=account-abstraction`,
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
  ];
  return (
    <div className="relative mb-10">
      <div
        style={{ height: 570 }}
        className="overflow-auto px-5 flex pl-32 items-center justify-center max-h-full rounded-lg border border-gray-300 shadow-sm"
      >
        <div className="h-full flex items-center">
          <ul
            role="list"
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          >
            {category.map((item) => (
              <li
                key={item.key}
                className="col-span-1 ring-1 w-full flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
              >
                <div className="flex flex-1 flex-col p-8">
                  <h3 className="mt-6 text-lg font-semibold text-gray-900">
                    {item.name}
                  </h3>
                  <dl className="mt-1 flex flex-grow flex-col justify-between">
                    <dt className="sr-only">Title</dt>
                    <dd className="text-sm text-gray-500">{item.title}</dd>
                  </dl>
                </div>
                <button
                  className="primary-btn m-4 px-6 flex mx-auto items-center"
                  onClick={() => navigate(item.link)}
                >
                  Explore <img className="ml-2" src={arrow} alt="" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
