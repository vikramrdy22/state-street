import axios from "axios";

export const getTransactions = async () => {
    const res = await axios.get('/data/data.json');
    return res.data;
}
