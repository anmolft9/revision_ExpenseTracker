import { getTransaction } from "../../helpers/axiosHelper.js";
import { setTransaction } from "./transactionSlice.js";

export const fetchDataActionddd = () => async (dispatch) => {
  const { status, message, trans } = await getTransaction();
  status === "success" && dispatch(setTransaction(trans));
};
