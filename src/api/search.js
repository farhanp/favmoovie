export default async function handler(req, res) {
  const { s } = req.query;

  const response = await fetch(
    `http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&s=${s}`
  );

  const data = await response.json();
  res.status(200).json(data);
}
