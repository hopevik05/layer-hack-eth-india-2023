import React, { Dispatch, SetStateAction } from "react";

import { Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

function Header({
  setSidebarOpen,
}: {
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const notifications: any[] = [];

  return (
    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
      <button
        type="button"
        className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
        // className="-m-2.5 p-2.5 text-gray-700 "
        onClick={() => setSidebarOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
      </button>

      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        <form className="relative flex flex-1" action="#" method="GET"></form>
        <div className="flex items-center gap-x-4 lg:gap-x-6">
          <Menu as="div" className="relative">
            <Menu.Button className="-m-1.5 flex items-center p-1.5">
              <span className="hidden lg:flex lg:items-center">
                <BellIcon
                  className="ml-2 h-6 w-6 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2.5 w-72 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                {notifications.length === 0 ? (
                  <p className="text-center p-8 font-semibold">
                    No recent notifications
                  </p>
                ) : (
                  <>
                    {notifications.map((item) => (
                      <Menu.Item key={item.name}>
                        {({ active }) => (
                          <a
                            href={item.href}
                            className={classNames(
                              active ? "bg-gray-50" : "",
                              "block px-3 py-1 text-sm leading-6 text-gray-900"
                            )}
                          >
                            {item.name}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </>
                )}
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  );
}
export default React.memo(Header);
