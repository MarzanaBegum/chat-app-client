import Cookies from "js-cookie";
import { createSlice } from "@reduxjs/toolkit";

interface ConversationPropsType {
  direct_chat: {
    conversations: any[];
    current_conversation: any;
    current_message: any[];
  };
  group_chat: {};
}

const initialState: ConversationPropsType = {
  direct_chat: {
    conversations: [],
    current_conversation: {},
    current_message: [],
  },
  group_chat: {},
};

const user_id = Cookies.get("user_id");

const slice = createSlice({
  name: "conversation",
  initialState,
  reducers: {
    fetchDirectConversations: (state, action) => {
      const list = action.payload.conversations.map((ele: any) => {
        const user = ele.participants.find((p: any) => p._id !== user_id);
        return {
          _id: ele._id,
          user_id: user._id,
          name: `${user.firstName} ${user.lastName}`,
          avatar: user.avatar,
          status: user?.status,
          pinned: false,
          about: user.about,
          messages: ele.messages,
        };
      });
      state.direct_chat.conversations = list;
    },
    updateDirectConversation: (state, action) => {
      const this_conversation = action.payload.conversation;
      const list = state.direct_chat.conversations.map((el) => {
        if (el?._id !== this_conversation._id) {
          return el;
        } else {
          const user = this_conversation.participants.find(
            (elm: any) => elm._id !== user_id
          );
          return {
            _id: this_conversation._id,
            user_id: user?._id,
            name: `${user?.firstName} ${user?.lastName}`,
            status: user?.status,
            avatar: user.avatar,
            about: user.about,
            messages: el.messages,
            pinned: false,
          };
        }
      });
      state.direct_chat.conversations = list;
    },
    addDirectConversation: (state, action) => {
      const this_conversation = action.payload.conversation;
      const user = this_conversation.participants.find(
        (elm: any) => elm._id !== user_id
      );
      state.direct_chat.conversations = state.direct_chat.conversations.filter(
        (el) => el?.id !== this_conversation._id
      );
      state.direct_chat.conversations.push({
        _id: this_conversation._id,
        user_id: user?._id,
        name: `${user?.firstName} ${user?.lastName}`,
        status: user?.status,
        avatar: user.avatar,
        about: user.about,
        messages: this_conversation.messages,
        pinned: false,
      });
    },
    setCurrentConversation(state, action) {
      state.direct_chat.current_conversation = action.payload;
    },
    fetchCurrentMessages(state, action) {
      const messages = action.payload;
      const message_list = messages.map((ele: any) => ({
        _id: ele._id,
        to: ele.to,
        from: ele.from,
        text: ele.text,
        type: ele.type,
        message_status: ele.message_status,
        date: ele.date,
        file: ele.file && ele.file,
      }));
      state.direct_chat.current_message = message_list;
    },
    addDirectMessages(state, action) {
      console.log(action.payload);

      state.direct_chat.current_message.push(action.payload);
    },
  },
});

export const {
  fetchDirectConversations,
  updateDirectConversation,
  addDirectConversation,
  setCurrentConversation,
  fetchCurrentMessages,
  addDirectMessages,
} = slice.actions;
export default slice.reducer;
