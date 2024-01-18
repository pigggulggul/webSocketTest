import { useState } from "react";
import "./App.css";
import { connect, disconnect, sendMessage } from "./main";
function App() {
  const [count, setCount] = useState(0);
  connect();
  const socketStart = () => {
    connect();
  };
  const socketDisconnect = () => {
    disconnect();
  };
  const socketSendMessage = () => {
    sendMessage();
  };
  return (
    <>
      <div>
        <div className="p-8">
          <h1 className="text-3xl font-bold">Spring Boot Tutorial.</h1>
          <h2 className="text-xl font-bold my-4">Websockets.</h2>
          <div className="row">
            <form id="form">
              <div className="row">
                <label htmlFor="connect">WebSocket connection:</label>
                <div
                  className="border m-4 bg-slate-100 px-2 rounded font-bold"
                  id="connect"
                  onClick={socketStart}
                >
                  Connect
                </div>
                <div
                  className="border m-4 bg-slate-100 px-2 rounded font-bold"
                  id="disconnect"
                  onClick={socketDisconnect}
                >
                  Disconnect
                </div>
              </div>
            </form>
          </div>
          <div className="row">
            <form>
              <div>
                <label className="row" htmlFor="name">
                  What is your name?
                </label>
                <input
                  className="border m-4 bg-slate-100 px-2 rounded font-bold"
                  type="text"
                  id="name"
                  placeholder="Your name here..."
                />
                <div
                  className="border m-4 bg-slate-100 px-2 rounded font-bold"
                  id="send"
                  onClick={socketSendMessage}
                >
                  Send
                </div>
              </div>
            </form>
          </div>
        </div>
        <div>
          <div className="m-8" id="conversation">
            <table>
              <thead>
                <tr>
                  <th>Greetings:</th>
                </tr>
              </thead>
              <tbody id="greetings"></tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
