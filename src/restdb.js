const baseURL = "http://localhost:4000/customers/";
const fetchData = async (url, myInit) => {
  try {
    const response = await fetch(url, myInit);
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    alert(error);
  }
};
export async function getAll(setCustomers) {
  const myInit = { method: 'GET', mode: 'cors' };
  const data = await fetchData(baseURL, myInit);
  return setCustomers(data);
}


export async function get(id) {
  const myInit = {
    method: "GET",
    mode: "cors",
  };
  
  let result =  await fetchData(baseURL+id, myInit);
return result;
}

export async function deleteById(id,postOpCallback) {
  let myInit = { method: 'DELETE', mode: 'cors' };
  await fetchData(baseURL+id, myInit); 
  return postOpCallback();
}

export async function post(item, postOpCallback) {
  delete item.id;
  let body = JSON.stringify(item);
  let myInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
   },
    body: body,
    mode: 'cors'
  };
  console.log(myInit)
   await fetchData(baseURL, myInit);
   return postOpCallback();
  
}

export async function put(id, item,postOpCallback) {
  let body = JSON.stringify(item);
  console.log(item)
  let myInit = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
   },
    body: body,
    mode: 'cors'
  };
  await fetchData(baseURL+id, myInit);
  return postOpCallback();
}



