import axios from 'axios'


// Register user
const register = async (userData) => {
  const response = await axios.post('http://127.0.0.1:8000/api/accounts/register/',userData)

  if (response.data) {
    sessionStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Login user
const login = async (userData) => {
  const response = await axios.post('http://127.0.0.1:8000/api/accounts/login/',userData)
  
  if (response.data) {
    sessionStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Logout user
const logout = () => {
  sessionStorage.removeItem('user')
  
}

const authService = {
  register,
  logout,
  login,
}

export default authService