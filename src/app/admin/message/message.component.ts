import { Component } from '@angular/core';

// Chat and Group Interfaces
interface Chat {
  id: number;
  name: string;
  image: string;
  status?: string; // e.g., 'Active' or '5min ago'
  messages?: Message[];
}

interface Group {
  id: number;
  name: string;
  description: string;
  messages?: Message[];
}

interface Message {
  sender: string; // 'self' or 'other'
  content: string;
}

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrl: './message.component.css'
})
export class MessageComponent {
  // Chat List Data
  chatList: Chat[] = [
    { id: 1, name: 'Nicolas', image: '../../../assets/images/48px.png', status: 'Active' },
    { id: 2, name: 'Genevieve Rh…', image: '../../../assets/images/48px.png', status: '5min ago' },
    { id: 3, name: 'Seth Daniels', image: '../../../assets/images/40px.png', status: 'Active' },
    { id: 4, name: 'Lucy Chavez', image: '../../../assets/images/48px.png', status: '15min ago' },
    { id: 5, name: 'Genevieve Rh…', image: '../../../assets/images/40px.png', status: '1 hour ago' },
  ];

  // Group List Data
  groupList: Group[] = [
    { id: 1, name: '#Nicolas Team', description: 'This is team group' },
    { id: 2, name: '#Nicolas Plan', description: 'This is plan group' },
    { id: 3, name: '# General', description: 'This is general group' },
  ];

  // Selected Chat and Group
  selectedChat: Chat | null = null;
  selectedGroup: Group | null = null;

  // Method to select a chat
  selectChat(chat: Chat) {
    this.selectedChat = chat;
    this.selectedGroup = null;
    this.loadMessagesForChat(chat.id);
  }

  // Method to select a group
  selectGroup(group: Group) {
    this.selectedGroup = group;
    this.selectedChat = null;
    this.loadMessagesForGroup(group.id);
  }

  // Method to load messages dynamically for a chat
  loadMessagesForChat(chatId: number) {
    const chat = this.chatList.find((c) => c.id === chatId);
    if (chat) {
      // Add sample messages
      chat.messages = [
        { sender: 'other', content: 'Hey, are you there?' },
        { sender: 'self', content: 'Yes, tell me.' },
        { sender: 'other', content: 'How are you?' },
        { sender: 'self', content: 'I’m doing great, thanks for asking!' },
        { sender: 'other', content: 'That’s awesome! What have you been up to?' },
        { sender: 'self', content: 'Just working on a few projects. What about you?' },
        { sender: 'other', content: 'Same here. Been swamped with work!' },
        { sender: 'self', content: 'I totally get it. I’ve been busy too.' },
        { sender: 'other', content: 'By the way, did you get the email I sent yesterday?' },
        { sender: 'self', content: 'Yes, I did! I’ll get back to you on that soon.' },
        { sender: 'other', content: 'No rush, just wanted to make sure you saw it.' },
        { sender: 'self', content: 'Thanks! I’ll take a look at it today.' },
        { sender: 'other', content: 'Cool, I’m looking forward to your feedback.' },
        { sender: 'self', content: 'Absolutely! I’ll make sure to send it by the end of the day.' },
        { sender: 'other', content: 'Great! Catch up later?' },
        { sender: 'self', content: 'For sure! Talk soon!' }
      ];
    }
  }

  
  // Method to load messages for a group
  loadMessagesForGroup(groupId: number) {
    const group = this.groupList.find((g) => g.id === groupId);
    if (group) {
      // Add sample messages
      group.messages = [
        { sender: 'abcd name', content: 'Team meeting at 3 PM today.' },
        { sender: 'self', content: 'Got it! I’ll be there.' },
        { sender: 'other', content: 'Do we need to prepare anything?' },
        { sender: 'self', content: 'I think just bring your updates.' },
        { sender: 'other', content: 'Perfect, see you then.' },
        { sender: 'self', content: 'Looking forward to it!' }
      ];
    }
  }

  // Method to send a new message
  newMessage: string = '';
  sendMessage(message: string) {
    if (this.selectedChat && message.trim()) {
      // Add the new message to the selected chat's messages array
      const newMsg: Message = { sender: 'self', content: message };
      if (!this.selectedChat.messages) {
        this.selectedChat.messages = [];
      }
      this.selectedChat.messages.push(newMsg);

      // Clear the input field
      this.newMessage = '';
    } else if (this.selectedGroup && message.trim()) {
      // Add the new message to the selected group's messages array
      const newMsg: Message = { sender: 'self', content: message };
      if (!this.selectedGroup.messages) {
        this.selectedGroup.messages = [];
      }
      this.selectedGroup.messages.push(newMsg);

      // Clear the input field
      this.newMessage = '';
    }
  }
}
