import axios from "axios";
// const api1 = "http://192.168.1.28:8000/api/";
// https://divinedecores.com.au/api/
const MainUrl = "https://divinedecores.com.au:8000/api/";
axios.defaults.baseURL = MainUrl;

export const getAboutus = async () => {
  return await axios.get("getaboutus");
};
export const InquireNow = async (obj) => {
  return await axios.post("addinquiredata", obj);
};
export const getTemples = async () => {
  return await axios.get("gettemples");
};
export const getTemplesForLimit = async (type = "temple") => {
  return await axios.get("getlistbytype", {
    params: { page: 1, limit: 10, type: type },
  });
};
//-----------------getrelatedproduct/624be8b51a5b2ab96b5a230f?type=temple&page=1&limit=4
export const getRelatedProducts = async (id, type, page, limit) => {
  return await axios.get(`getrelatedproduct/${id}`, {
    params: { type: type, page: page, limit: limit },
  });
};
//----------------
export const getTemplesPagignate = async (page, type, limit) => {
  return await axios.get("getlistbytype", {
    params: { page: page, limit: limit, type: type },
  });
};
export const getDivinePagignate = async (page, type, limit) => {
  return await axios.get("getlistbytype", {
    params: { page: page, limit: limit, type: type },
  });
};
export const GetTempleById = async (id) => {
  return await axios.get(`gettemplebyid/${id}`);
};
