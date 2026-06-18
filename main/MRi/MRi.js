const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');
const chatMessages = document.getElementById('chat-messages');
const alertMessage = document.getElementById('alert-message');

// API key removed for security — replace with your own if needed
const API_KEY = "This key has been removed for security.";

// Initialize an array to hold the conversation history
let conversationHistory = []; 

// check if the internet connection available or not
  let isOnline = navigator.onLine; 
  sendButton.addEventListener('click', () => {
    const userMessage = userInput.value.trim();
    if (userMessage) {
      displayMessage(userMessage, 'user');
      userInput.value = '';
      addToConversation(userMessage, "user");
      sendToAi();
    }
    else {
      alert("Please enter first keywords to search.");
    }
  });
  userInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      sendButton.click()
    }
  });
/*_=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=_*/

  // Function to check internet connectivity
  function updateOnlineStatus() {
    isOnline = navigator.onLine;
    if (!isOnline) {
      alertMessage.style.display = 'block';
    }
  };

  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
  updateOnlineStatus();
  
/*_=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=__=_*/

  function displayMessage(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', `${sender}-message`);

    // Create a container for the message text
    const messageContent = document.createElement('div');
    messageContent.innerHTML = message;
    messageDiv.appendChild(messageContent)

    // Create message options container
    const optionsDiv = document.createElement('div');
    optionsDiv.classList.add('message-options');

    // Create Copy button
    const copyButton = document.createElement('button');
    copyButton.classList.add('copy-options')
    copyButton.innerHTML = '📋';
    copyButton.onclick = () => copyTextToClipboard(message);

    // Append buttons to options
    optionsDiv.appendChild(copyButton);

    messageDiv.appendChild(optionsDiv);
    chatMessages.appendChild(messageDiv);
    
    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight; 
  };

  async function copyTextToClipboard(text) {
    try {
       await navigator.clipboard.writeText(text);
       alert('Text is copeid to clipboard')
    } 
    catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

 function addToConversation(message, role) {
    conversationHistory.push({
      parts: [{text: message}],
      role: role
    });
  };

  async function sendToAi() {

    if (!isOnline) {
      return;
    }

    const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=' + API_KEY;
    
    const systemPrompt = {
      parts: [
        {text: "You are a helpful and friendly chatbot. Please answer user questions concisely, being helpful and not chatty. "}
      ],
      role: "user",
    }
    
    const data = {
      contents: [
        systemPrompt,
        ...conversationHistory,
      ],
      generationConfig: {
        temperature: 0.8,
      },
    }
    
    try {
          const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`
          );
      };
      const json = await response.json();
      const botMessage = json.candidates[0].content.parts[0].text;
      displayMessage(botMessage, 'bot');
      addToConversation(botMessage, 'model');
    }
    
    catch (error) {
         displayMessage('😥 Error getting response, please try again later', 'bot');
    }
  };
