import axios from "axios";

const BASE_URL = "http://localhost:5050/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNmY0M2EwM2E2NmZhOGE3MzJmZTM1ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNDY4MjAyMSwiZXhwIjoxNjM0OTQxMjIxfQ.AXNRUcPKQ8fPguKDQ9CVV67nyO9wsAvGbmeUUXmIK84";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
