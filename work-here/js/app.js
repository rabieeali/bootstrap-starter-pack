const baseUrl = 'https://jsonplaceholder.typicode.com'

const fetchUsers = async () => {
    try {
        const response = await axios.get(`${baseUrl}/users`)
        const users = response.data
        console.log(users)
    } catch (err) {
        console.log(err)
    }
}

fetchUsers()

// see the cosole