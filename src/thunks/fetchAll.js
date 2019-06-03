const fetchAll = async (url) => {
  const response = await fetch(url)
  if(!response.ok) throw new Error(response.statusText)
  return response.statusText === 'No Content' ? null : response.json()
}

export default fetchAll;