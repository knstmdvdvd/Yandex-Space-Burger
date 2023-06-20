import { apiUrl } from "../const/api.const";

export const getItemsRequest = async () => {
  try {
    const response = await fetch(apiUrl + "ingredients").then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка ${res.status}`);
    });
    const responseData = await response;
    if (!responseData.success) {
      throw new Error(responseData);
    } else {
      return responseData.data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const sendOrderApi = async (items: String[]) => {
  try {
    const response = await fetch(apiUrl + "orders", {
      method: "POST",
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        ingredients: items,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка ${res.status}`);
    });
    const responseData = await response;
    if (!responseData.success) {
      throw new Error(responseData);
    } else {
      return responseData;
    }
  } catch (error) {
    console.log(error);
  }
};
