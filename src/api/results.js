export async function getResults(gameDay) {
  // const today = new Date();
  const response = await fetch(
    `https://www.openligadb.de/api/getmatchdata/bl1/2019/${gameDay}`,
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
  const data = await response.json();
  return data;
}
