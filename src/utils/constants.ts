import CallIcon from "@/components/CustomIcons/CallIcon";
import CaretDownIcon from "@/components/CustomIcons/CaretDownIcon";
import ChatsIcon from "@/components/CustomIcons/ChatsIcon";
import GroupIcon from "@/components/CustomIcons/GroupIcon";
import PhoneIcon from "@/components/CustomIcons/PhoneIcon";
import SearchIcon from "@/components/CustomIcons/SearchIcon";
import SettingIcon from "@/components/CustomIcons/SettingIcon";
import VideoCamIcon from "@/components/CustomIcons/VideoCamIcon";

export const sidebarNavListItems = [
  {
    Icon: ChatsIcon,
    link: "/dashboard/chats",
  },
  {
    Icon: GroupIcon,
    link: "/dashboard/group",
  },
  {
    Icon: CallIcon,
    link: "/dashboard/call",
  },
  {
    Icon: SettingIcon,
    link: "/dashboard/settings",
  },
];

export const ChatList = [
  {
    id: 0,
    img: "/assets/images/avatar.png",
    name: "Mariam Islam2",
    msg: "Hello",
    time: "9:36",
    unread: 0,
    pinned: true,
    online: true,
  },
  {
    id: 1,
    img: "/assets/images/avatar.png",
    name: "Maya",
    msg: "Hello",
    time: "12:02",
    unread: 2,
    pinned: true,
    online: false,
  },
  {
    id: 2,
    img: "/assets/images/avatar.png",
    name: "Mariam Islam2",
    msg: "Hello",
    time: "10:35",
    unread: 3,
    pinned: false,
    online: true,
  },
  {
    id: 3,
    img: "/assets/images/avatar.png",
    name: "Mariam Islam2",
    msg: "Hello",
    time: "04:00",
    unread: 0,
    pinned: false,
    online: true,
  },
  {
    id: 4,
    img: "/assets/images/avatar.png",
    name: "Mariam Islam2",
    msg: "Hello",
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
  },
  {
    id: 5,
    img: "/assets/images/avatar.png",
    name: "Mariam Islam2",
    msg: "Hello",
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
  },
  {
    id: 6,
    img: "/assets/images/avatar.png",
    name: "Mariam Islam2",
    msg: "Hello",
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
  },
  {
    id: 7,
    img: "/assets/images/avatar.png",
    name: "Mariam Islam2",
    msg: "Hello",
    time: "08:42",
    unread: 0,
    pinned: false,
    online: false,
  },
];

export const iconsList = [
  {
    id: 0,
    Icon: VideoCamIcon,
  },
  {
    id: 1,
    Icon: PhoneIcon,
  },
  {
    id: 2,
    Icon: SearchIcon,
  },
  {
    id: 3,
    Icon: CaretDownIcon,
  },
];

export const Chat_History = [
  {
    type: "msg",
    message: "Hi 👋🏻, How are ya ?",
    incoming: true,
    outgoing: false,
  },
  {
    type: "divider",
    text: "Today",
  },
  {
    type: "msg",
    message: "Hi 👋 Panda, not bad, u ?",
    incoming: false,
    outgoing: true,
  },
  {
    type: "msg",
    message: "Can you send me an abstarct image?",
    incoming: false,
    outgoing: true,
  },
  {
    type: "msg",
    message: "Ya sure, sending you a pic",
    incoming: true,
    outgoing: false,
  },

  {
    type: "msg",
    subtype: "img",
    message: "Here You Go",
    img: "/assets/images/media-img.svg",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    message: "Can you please send this in file format?",
    incoming: false,
    outgoing: true,
  },

  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "link",
    preview: "/assets/images/media-img.svg",
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "reply",
    reply: "This is a reply",
    message: "Yep, I can also do that",
    incoming: false,
    outgoing: true,
  },
];