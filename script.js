CodewithCurious

Search
Search...


Python Handwritten Notes
Java Handwritten Notes
DSA Handwritten Notes
React Js Handwritten Notes
Browser All Handwritten Notes
Free Ebooks
Python Ebook
Java Ebook
Python Games Ebook
Interview QnA Ebook
Browse All Ebooks
Free Projects
Python Projects
Java Projects
C++ Projects
HTML CSS JS Projects
Free Ebooks
Python Ebook
Java Ebook
Python Games Ebook
Interview QnA Ebook
Browse All Ebooks
/ projects, Web Development Projects / By Nikhil Kamble
Real-Time Chat Application Using HTML , CSS & JavaScript With Source Code
Real-Time Chat Application Using HTML , CSS & JavaScript
Introduction:
The Real-Time Chat Application is a web-based platform that enables users to communicate with each other in real-time using text messages. It provides a seamless and interactive chatting experience, fostering instant communication and collaboration between users. The application utilizes HTML, CSS, and JavaScript to create an attractive and user-friendly interface.

Key Features:
User Registration and Authentication: Users can create an account and securely log in to the chat application to access the chat features.

Real-Time Messaging: The application allows users to send and receive messages instantly, providing a smooth and responsive chat experience.

User-to-User Communication: Users can search for other registered users and initiate private conversations with them.

Group Chat: Users have the ability to create or join chat rooms where multiple participants can communicate simultaneously.

Emojis and File Sharing: The application supports the use of emojis in messages and allows users to share files such as images or documents.

Message Notifications: Users receive notifications for new messages, ensuring that they stay updated with the ongoing conversations.

User Presence Status: The application displays the online/offline status of users, indicating their availability for chat.

Message History: The chat application maintains a message history, allowing users to scroll back and view previous conversations.

Get Discount on Top Educational Courses
Brand Name	Discount Information	Coupon Codes Link
Educative.io	20% discount on Educative courses and plans	Get Coupon
W3Schools	20% discount on W3Schools courses	Get Coupon
KodeKloud	10% discount on KodeKloud courses and plans	Get Coupon
GeeksforGeeks	30% discount on GeeksforGeeks courses	Get Coupon
Target Test Prep	20% discount on Target Test Prep	Get Coupon
Coding Ninjas	₹5000 discount on Coding Ninjas courses	Get Coupon
Skillshare	40% discount on Skillshare	Get Coupon
DataCamp	50% discount on DataCamp	Get Coupon
365 Data Science	57% discount on 365 Data Science Plans	Get Coupon
Get Smarter	Flat 20% discount on Get Smarter courses	Get Coupon
SmartKeeda	Flat 40% discount on SmartKeeda courses	Get Coupon
StackSocial	20% discount on StackSocial courses	Get Coupon
Source Code:
HTML:
<!--@codewithcurious.com-->









<title>Real-Time Chat Application</title>



<header>
  <h1>Real-Time Chat Application</h1>
</header>
<div class="container">
  <div class="chat-window">
    <div class="chat-area">
      <div class="chat-messages">
        <!-- Chat Messages -->
      </div>
    </div>
    <div class="user-input">

      <button id="send-button">Send</button>
    </div>
  </div>
</div>
CSS (style.css):
/* @codewithcurious.com */

/* Global Styles */
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

header {
  background-color: #007bff;
  color: #fff;
  padding: 20px;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

/* Chat Window Styles */
.chat-window {
  width: 500px;
  background-color: #f0f0f0;
  border-radius: 8px;
  overflow: hidden;
}

.chat-area {
  height: 400px;
  overflow-y: scroll;
  padding: 20px;
}

.chat-messages {
  display: flex;
  flex-direction: column;
}

.message {
  margin-bottom: 10px;
  background-color: #fff;
  padding: 10px;
  border-radius: 4px;
}

.user-input {
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: #fff;
}

#message-input {
  flex-grow: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

#send-button {
  padding: 8px 16px;
  margin-left: 10px;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
}

#send-button:hover {
  background-color: #0056b3;
}
JavaScript (script.js):
//@codewithcurious.com


// Function to handle sending a message
function sendMessage() {
  const messageInput = document.getElementById('message-input');
  const message = messageInput.value.trim();
  if (message !== '') {
    const chatMessages = document.querySelector('.chat-messages');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
    messageInput.value = '';
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
}

// Event listener
document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('message-input').addEventListener('keydown', (event) =&gt; {
  if (event.key === 'Enter') {
    event.preventDefault();
    sendMessage();
  }
});
