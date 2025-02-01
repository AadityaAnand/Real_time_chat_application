# Real Time Chat Application
Chat Application with Raw WebSockets in Node.js

This project is a simple chat application built using raw WebSockets in Node.js. It enables real-time communication while giving administrators control over chat sessions and moderation. The key features include:
	•	Admin-Controlled Chat Sessions:
	•	Create New Sessions/Rooms: Admins can create chat sessions with customizable properties.
	•	Name: Assign a unique name to the chat room.
	•	Start Time: Specify when the session begins.
	•	Is Open: Toggle the room’s active status.
	•	Cooldown Time: Set a delay between messages to manage chat flow.
	•	User Interaction:
	•	Join & Chat: Users can join any available chat room and participate by sending messages in real time.
	•	Upvoting: Users can upvote chat messages they like.
	•	Automated Message Moderation:
	•	Highlight Popular Messages: Messages with more than 3 upvotes are automatically moved to a separate highlighted section.
	•	Admin Alerts: When a message gathers more than 10 upvotes, the system alerts the admin to prompt further action.

This application provides a straightforward example of using WebSockets for live communication and demonstrates how to integrate administrative controls and automated moderation features into a chat environment.
