import Avatar from "@/components/CustomIcons/Avatar";
import CaretDownIcon from "@/components/CustomIcons/CaretDownIcon";
import ChatsIcon from "@/components/CustomIcons/ChatsIcon";
import GroupIcon from "@/components/CustomIcons/GroupIcon";
import LogoutIcon from "@/components/CustomIcons/LogoutIcon";
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
    Icon: PhoneIcon,
    link: "/dashboard/call",
  },
  {
    Icon: SettingIcon,
    link: "/dashboard/settings",
  },
];

export const profileMenu = [
  {
    Icon: Avatar,
    title: "Profile",
  },
  {
    Icon: SettingIcon,
    title: "Settings",
  },
  {
    Icon: LogoutIcon,
    title: "Logout",
  },
];

export const message_options = [
  {
    title: "Reply",
  },
  {
    title: "React to message",
  },
  {
    title: "Forward message",
  },
  {
    title: "Star message",
  },
  {
    title: "Report",
  },
  {
    title: "Delete Message",
  },
];

export const speedDialData = [
  {
    icon: "/icons/user-avatar.svg",
    title: "Photo/Video",
  },
  {
    icon: "/icons/blank-file.svg",
    title: "Stickers",
  },
  {
    icon: "/icons/camera.svg",
    title: "Image",
  },
  {
    icon: "/icons/sticker.svg",
    title: "Document",
  },
  {
    icon: "/icons/picture-icon.svg",
    title: "Contact",
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

export const sharedTabData = [
  { id: 0, title: "Media", link: "media" },
  { id: 1, title: "Links", link: "links" },
  { id: 2, title: "Docs", link: "docs" },
];

export const Shared_docs = [
  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
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
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
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
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
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
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },
];

export const Shared_links = [
  {
    type: "msg",
    subtype: "link",
    preview: "/assets/images/car.svg",
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "link",
    preview: "/assets/images/car.svg",
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "link",
    preview: "/assets/images/car.svg",
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "link",
    preview: "/assets/images/car.svg",
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "link",
    preview: "/assets/images/car.svg",
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  },
  {
    type: "msg",
    subtype: "link",
    preview: "/assets/images/car.svg",
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  },
];
export const Chat_History = [
  {
    id: 0,
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
    id: 1,
    type: "msg",
    message: "Hi 👋 Panda, not bad, u ?",
    incoming: false,
    outgoing: true,
  },
  {
    id: 2,
    type: "msg",
    message: "Can you send me an abstarct image?",
    incoming: false,
    outgoing: true,
  },
  {
    id: 3,
    type: "msg",
    message: "Ya sure, sending you a pic",
    incoming: true,
    outgoing: false,
  },

  {
    id: 4,
    type: "msg",
    subtype: "img",
    message: "Here You Go",
    img: "/assets/images/media-img.svg",
    incoming: true,
    outgoing: false,
  },
  {
    id: 5,
    type: "msg",
    message: "Can you please send this in file format?",
    incoming: false,
    outgoing: true,
  },

  {
    id: 6,
    type: "msg",
    subtype: "doc",
    message: "Yes sure, here you go.",
    incoming: true,
    outgoing: false,
  },
  {
    id: 7,
    type: "msg",
    subtype: "link",
    preview: "/assets/images/media-img.svg",
    message: "Yep, I can also do that",
    incoming: true,
    outgoing: false,
  },
  {
    id: 8,
    type: "msg",
    subtype: "reply",
    reply: "This is a reply",
    message: "Yep, I can also do that",
    incoming: false,
    outgoing: true,
  },
];

export const CallList = [
  {
    id: 0,
    img: "/assets/images/avatar.png",
    name: "Cute Turtle",
    online: true,
    incoming: true,
    missed: false,
  },
  {
    id: 1,
    img: "/assets/images/avatar.png",
    name: "Dinesh",
    online: true,
    incoming: false,
    missed: true,
  },
  {
    id: 2,
    img: "/assets/images/avatar.png",
    name: "Dinesh",
    online: false,
    incoming: true,
    missed: true,
  },
  {
    id: 3,
    img: "/assets/images/avatar.png",
    name: "Dinesh",
    online: false,
    incoming: false,
    missed: false,
  },
  {
    id: 4,
    img: "/assets/images/avatar.png",
    name: "Dinesh",
    online: true,
    incoming: true,
    missed: false,
  },
  {
    id: 5,
    img: "/assets/images/avatar.png",
    name: "Dinesh",
    online: false,
    incoming: false,
    missed: false,
  },
  {
    id: 6,
    img: "/assets/images/avatar.png",
    name: "Dinesh",
    online: true,
    incoming: true,
    missed: false,
  },
  {
    id: 7,
    img: "/assets/images/avatar.png",
    name: "Dinesh",
    online: false,
    incoming: false,
    missed: false,
  },
  {
    id: 8,
    img: "/assets/images/avatar.png",
    name: "Dinesh",
    online: true,
    incoming: true,
    missed: false,
  },
  {
    id: 9,
    img: "/assets/images/avatar.png",
    name: "Dinesh",
    online: false,
    incoming: false,
    missed: false,
  },
  {
    id: 10,
    img: "/assets/images/avatar.png",
    name: "Dinesh",
    online: true,
    incoming: true,
    missed: false,
  },
  {
    id: 11,
    img: "/assets/images/avatar.png",
    name: "Dinesh",
    online: false,
    incoming: false,
    missed: false,
  },
  {
    id: 12,
    img: "/assets/images/avatar.png",
    name: "Dinesh",
    online: true,
    incoming: true,
    missed: false,
  },
];

export const membersList = [
  {
    id: 0,
    img: "/assets/images/avatar.png",
    name: "Dinesh",
    online: true,
  },
  {
    id: 1,
    img: "/assets/images/avatar.png",
    name: "Dinesh",
    online: false,
  },
  {
    id: 2,
    img: "/assets/images/avatar.png",
    name: "Dinesh",
    online: true,
  },
  {
    id: 3,
    img: "/assets/images/avatar.png",
    name: "Dinesh",
    online: false,
  },
  {
    id: 4,
    img: "/assets/images/avatar.png",
    name: "Dinesh",
    online: true,
  },
  {
    id: 5,
    img: "/assets/images/avatar.png",
    name: "Dinesh",
    online: false,
  },
  {
    id: 6,
    img: "/assets/images/avatar.png",
    name: "Dinesh",
    online: false,
  },
];
