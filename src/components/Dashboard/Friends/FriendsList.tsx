import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchFriends } from "../../../../redux/slices/app";

const FriendsList = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state: any) => state.app);
  console.log(users, "users");
  
  useEffect(() => {
    dispatch(FetchFriends());
  }, []);

  return <div>friends</div>;
};

export default FriendsList;
