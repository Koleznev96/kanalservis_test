import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { userActions } from "../redux/user.slice";

const actions = {
    ...userActions,
};

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(actions, dispatch);
};
