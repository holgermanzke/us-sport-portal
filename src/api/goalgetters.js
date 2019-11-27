export async function getGoalgetters() {
  const response = await fetch(
    `https://www.openligadb.de/api/getgoalgetters/bl1/2019`,
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
  const data = await response.json();
  return data;
}
