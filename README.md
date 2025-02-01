# Real Time Chat Application

This project is a simple chat application built using raw WebSockets in Node.js. It enables real-time communication while providing administrators with control over chat sessions and message moderation.

## Features

### Admin-Controlled Chat Sessions
- **Create New Sessions/Rooms:** Admins can create chat sessions with customizable properties:
  - **Name:** Assign a unique name to the chat room.
  - **Start Time:** Specify when the session begins.
  - **Is Open:** Toggle the room's active status.
  - **Cooldown Time:** Set a delay between messages to manage the chat flow.

### User Interaction
- **Join & Chat:** Users can join any available chat room and send messages in real time.
- **Upvoting:** Users can upvote chat messages they like.

### Automated Message Moderation
- **Highlight Popular Messages:** Messages with more than **3 upvotes** are automatically moved to a separate highlighted section.
- **Admin Alerts:** When a message gathers more than **10 upvotes**, the system alerts the admin for further action.

## Contributing

Contributions are welcome! Feel free to fork the repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.
