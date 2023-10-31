const API_URL = 'http://localhost:5000/api/users/';

// Register user
const register = async (userData) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem('user', JSON.stringify(data));
      return data;
    } else {
      throw new Error('Failed to register user');
    }
  } catch (error) {
    throw new Error(error.message || 'An error occurred');
  }
}

// Login user
const login = async (userData) => {
  try {
    const response = await fetch(API_URL + 'login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem('user', JSON.stringify(data));
      return data;
    } else {
      throw new Error('Failed to login');
    }
  } catch (error) {
    throw new Error(error.message || 'An error occurred');
  }
}

// Logout user
const logout = () => {
  localStorage.removeItem('user');
}

const authService = {
  register,
  login,
  logout,
};

export default authService;
