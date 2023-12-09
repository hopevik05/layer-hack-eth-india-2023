import { useState } from "react";
import logo from "../../../../assets/logo/layer-hack.svg";
import Axios from "axios";
import { gptAuthKey } from "../../../../common/config";

export default function QueryEditor() {
  const [query, setQuery] = useState<string>("");
  const [chatHistory, setChatHistory] = useState<any[]>([]);

  const sendMessage = async () => {
    const response = await Axios.post(
      "https://api.openai.com/v3/chat/completions",
      {
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          { role: "user", content: query },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${gptAuthKey}`,
          "Content-Type": "application/json",
        },
      }
    );

    // Update chat history with the response
    setChatHistory([
      ...chatHistory,
      { role: "assistant", content: response.data.choices[0].message.content },
    ]);
    setQuery("");
  };

  return (
    <div className="relative mb-10">
      <div className="overflow-hidden flex items-center justify-center h-96 max-h-full rounded-lg border border-gray-300 shadow-sm">
        {chatHistory.length > 0 ? (
          <div>
            {chatHistory.map((message, index) => (
              <div key={index} className={message.role}>
                {message.content}
              </div>
            ))}
          </div>
        ) : (
          <div className="">
            <img className="h-14 w-auto" src={logo} alt="logo" />
            <p className="text-base font-semibold pt-3">
              How can I help you today?
            </p>
          </div>
        )}
      </div>

      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          type="text"
          name="question"
          onChange={({ target: { value } }) => setQuery(value)}
          className="block w-full p-3 rounded-md font-semibold border-0 py-1.5 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Ask your question here..."
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <button
            onClick={() => sendMessage()}
            className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
