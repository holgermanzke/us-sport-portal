export async function getResults() {
  const response = await fetch(
    `https://www.openligadb.de/api/getmatchdata/bl1`,
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
  const data = await response.json();
  return data;
}
