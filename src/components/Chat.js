import React, { useState } from "react";
import {BsFillChatRightDotsFill} from 'react-icons/bs'

function Chat() {
  const [conversation, setConversation] = useState([
    { text: "Hey!", sender: "bot" },
  ]);
  const [showChat, setShowChat] = useState(false);

  function handleMessage(event) {
    event.preventDefault();
    const message = event.target.elements.message.value;
    let response = "";
    if (message.includes("hi") || message.includes("hey") || message.includes("hello")) {
      response = "I'm good, How can I help you?";
    } else if (message.includes("how")) {
      response = "I'm doing well, thank you for asking.";
    } 
    else if (message.includes("contact")) {
      response = "To contact us, click on the Contact page";
    }
    else if (message.includes("old")) {
      response = "I'll let you know soon"
    }
    else if (message.includes("not")) {
      response = "Sorry to hear that, please wait or contact support staff for more assistance"
    }
    else if (message.includes("speak?")) {
      response = "Sure, kindly navigate to the 'Help' page and then 'Contact' section to speak to one of our staff"
    }
    else if (message.includes("name?")) {
      response = "My name is CarChiefAI.";
    }  else if (message.includes("help")) {
      response = "If you need any help click on the help button on the navigation bar";
    } else {
      response = "I'm sorry, I don't understand. Can you please rephrase?";
    }
    setConversation([
      ...conversation,
      { text: message, sender: "user" },
      { text: response, sender: "bot" },
    ]);
    event.target.elements.message.value = "";
  }
  function handleButtonClick() {
    setShowChat(true);
  }

  if (!showChat) {
    return (
      <div className="flex items-center justify-center fixed right-0 bottom-0">
        <div>
        <button 
            onClick={handleButtonClick}
            className="transform hover:-translate-y-3 rounded-full duration-500 text-[var(--primary2)] hover:text-white text-2xl px-4">
                <div className="bg-gray-900/40 border-2 p-3 rounded-full animate-bounce" title="Let's chat"><BsFillChatRightDotsFill size={30}/></div>
        </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-gray-50 fixed right-0 bottom-0">
        <button
            className="text-gray-600 hover:text-gray-900 focus:outline-none fixed bottom-2"
            onClick={() => setShowChat(false)}>Close Me</button>
      <div className="flex flex-col space-y-4">
        {conversation.map((message, index) => (
          <div
            key={index}
            className={`${
              message.sender === "user" ? "justify-end" : "justify-start"
            } flex`}
          >
            <div
              className={`${
                message.sender === "user"
                  ? "bg-[var(--primary2)] text-white"
                  : "bg-gray-200 text-gray-900"
              } rounded-lg py-2 px-4 max-w-xs`}>
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleMessage} className="flex mt-4 pb-6">
        <input
          type="text"
          name="message"
          placeholder="Type a message"
          className="flex-1 bg-white rounded-lg px-4 py-2 focus:outline-none focus:bg-gray-100 focus:shadow-outline"/>
        <button type="submit" className="bg-[var(--primary2)] hover:bg-[#ffd166] text-white font-bold py-2 px-4 rounded-lg ml-2">Send</button>
      </form>
    </div>
  );
}

export default Chat;