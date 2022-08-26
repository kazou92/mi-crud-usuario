

const userDB = [
    {
        id: 1,
        name: "christian",
        age: "4ans",
        email: "christ@gmail.com",
        country: "chile",
        phone: "996278822"
    }
]


const getAllUsers = () => {

    return userDB
}


const getUserById = (id) => {
    filtedDB = userDB.filter((item) => item.id === id)
    return filtedDB[0]

}


const createdUser = (userObj) => {
    if (userDB.length === 0) {
        const newUser = {
            id: 1,
            name: userObj.name,
            age: userObj.age,
            email: userObj.email,
            country: userObj.country,
            phone: userObj.phone
        }
        userDB.push(newUser)
        return newUser
    }

    const newUser = {
        id: userDB[userDB.length - 1].id + 1,
        name: userObj.name,
        age: userObj.age,
        email: userObj.email,
        country: userObj.country,
        phone: userObj.phone

    }
    userDB.push(newUser)
    return newUser

}

const deleteUser = (id) => {
    const index = userDB.findIndex((item) => item.id === id)
    if (index !== -1) {
        userDB.splice(index, 1)
        return true
    }
    return false

}


const updateUser = (id, data) => {
    const index = userDB.findIndex((item) => item.id === id)
    if (index !== -1) {
        userDB[index] = data
        return userDB[index]
    }else{
        createdUser(data)
        return userDB.at(-1)
    }
    

}


module.exports = {
    getAllUsers,
    getUserById,
    createdUser,
    deleteUser,
    updateUser
}