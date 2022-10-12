import { getTransaction } from "../../helpers/axiosHelper";
import { setTransaction } from "./transactionSlice.js";

export const fetchDataAction = () => async (dispatch) => {
  const { status, message, trans } = await getTransaction();
  status === "success" && dispatch(setTransaction(trans));
};
