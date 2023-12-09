import OpenAI from "openai";
import { useState } from "react";
import logo from "../../../../assets/logo/layer-hack.svg";
import { gptAuthKey } from "../../../../common/config";
import { Spin } from "antd";

export default function AddRemoveUsers({
  addOrRemoveUser,
  loading,
}: {
  addOrRemoveUser: Function;
  loading: boolean;
}) {
  const [user, setUser] = useState("");
  return (
    <div className="relative mb-10">
      <Spin spinning={loading}>
        <div className="my-auto h-full flex justify-center items-center">
          <div>
            <img className="h-14 w-96 mb-5" src={logo} alt="logo" />
          </div>
        </div>
        <div className="relative mt-2 rounded-md shadow-sm">
          <input
            type="text"
            name="question"
            onChange={({ target: { value } }) => setUser(value)}
            className="block w-full p-3 rounded-md font-semibold border-0 py-1.5 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Enter wallet address here..."
          />
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button
              onClick={() => addOrRemoveUser(user)}
              className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Submit
            </button>
          </div>
        </div>
      </Spin>
    </div>
  );
}
