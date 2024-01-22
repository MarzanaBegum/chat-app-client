import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchUsers } from "../../../../redux/slices/app";

const UserList = () => {
  const dispatch = useDispatch();
  const { friends } = useSelector((state: any) => state.app);
  console.log(friends, "friends");

  useEffect(() => {
    dispatch(FetchUsers());
  }, []);

  return <div>all users</div>;
};

export default UserList;
