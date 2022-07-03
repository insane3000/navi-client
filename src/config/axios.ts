// import Axios from "axios";

// const app = useSelector((store: StoreInterface) => store.app);

// export const axios = Axios.create({
//   baseURL: `http://192.168.0.148:5000`,
//   headers: {
//     authorization: `Bearer }`,
//   },
//   timeout: 3000,
// });

// !Development
// export const URI = "http://192.168.0.148:5000";

// !Production
// export const URI = "https://api.navigamescbba.com";

// !Final
export const URI = process.env.REACT_APP_BACKEND_URL;
