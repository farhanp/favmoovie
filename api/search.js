export default async function handler(req, res) {
  const { search, value } = req.query;

  const response = await fetch(
    `http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&${search}=${value}`
  );

  const data = await response.json();
  res.status(200).json(data);
}
