const getFavorites = async ({ id }: any) => {
  const request = await fetch('https://poke-app-server.onrender.com/api/user/:id/favorites')
}

export default getFavorites
