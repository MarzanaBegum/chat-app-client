import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchFriendRequests } from "../../../../redux/slices/app";

const RequestsList = () => {
  const dispatch = useDispatch();
  const { friendRequests } = useSelector((state: any) => state.app);
  console.log(friendRequests, "friendRequests");

  useEffect(() => {
    dispatch(FetchFriendRequests());
  }, []);

  return <div>request</div>;
};

export default RequestsList;
