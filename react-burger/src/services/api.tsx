import { PATH } from "../const/api.const";

const checkResponseOk = async (res: Response): Promise<any> => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
};

export const getItemsRequest = async () => {
  try {
    const response = await fetch(`${PATH}/ingredients`).then(checkResponseOk);
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
    const response = await fetch(`${PATH}/orders`, {
      method: "POST",
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        ingredients: items,
      }),
    }).then(checkResponseOk);
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
