import OpenAI from "openai";
import { useState } from "react";
import logo from "../../../../assets/logo/layer-hack.svg";
import { gptAuthKey } from "../../../../common/config";
import { Spin } from "antd";

export default function QueryEditor() {
  const [loading, setLoading] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [queryHistory, setQueryHistory] = useState<string[]>([]);
  const [chatHistory, setChatHistory] = useState<any[]>([]);

  // https://chat.openai.com/g/g-fZtVeafle-layerhack-sherpa
  const sendMessage = async () => {
    try {
      setLoading(true);
      const openai = new OpenAI({
        apiKey: gptAuthKey, // defaults to process.env["OPENAI_API_KEY"]
        dangerouslyAllowBrowser: true,
      });
      const response = await openai.chat.completions.create({
        messages: [{ role: "user", content: query }],
        model: "gpt-3.5-turbo",
      });
      setLoading(false);
      setChatHistory([
        ...chatHistory,
        { role: "assistant", content: response.choices[0].message.content },
      ]);
      setQueryHistory([...queryHistory, query]);
      setQuery("");
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="relative mb-10">
      <Spin spinning={loading}>
        <div
          style={{ height: 750 }}
          className="overflow-auto px-5flex items-center justify-center max-h-full rounded-lg border border-gray-300 shadow-sm"
        >
          {chatHistory.length > 0 ? (
            <div className="">
              <div className="chat-history font-semibold">
                {chatHistory.map((message, index) => (
                  <div key={index} className={`message ${message.role}`}>
                    <p className="text-base mb-2">
                      <span className="font-bold">You : </span>
                      {queryHistory[index]}
                    </p>
                    {message.content}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="my-auto h-full flex justify-center items-center">
              <div>
                <img className="h-14 w-auto" src={logo} alt="logo" />
                <p className="text-base font-semibold pt-3">
                  How can I help you today?
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="relative mt-2 rounded-md shadow-sm">
          <input
            type="text"
            name="question"
            onKeyPress={handleKeyPress}
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
      </Spin>
    </div>
  );
}
