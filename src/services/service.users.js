export default async function getApiUsers() {
  const api = "https://next.json-generator.com/api/json/get/E1iKSS0bq";
  try {
    let response = await fetch(api).then((res) => res.json());
    return response;
  } catch (err) {
    console.error(err);
  } finally {
  }
}
