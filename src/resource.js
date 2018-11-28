export default async function api(endpoint) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/${endpoint}`
    );
    if (response.ok) {
      return await response.json();
    } else {
      // que pueda fallar //ERROR BOUNDARIES
      throw Error(response);
    }
  } catch (e) {
    console.log(e);
    return e.message;
    // return e;
  }
}
