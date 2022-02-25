import { AxiosClient } from "../../utils/axios";
import {USERS_ENDPOINT} from "../../utils/constants";

export const getUsers = async () => {
    const response = await AxiosClient.get(USERS_ENDPOINT);
    console.log(response)
}
