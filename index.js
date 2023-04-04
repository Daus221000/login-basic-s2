let dbUsers = [
    {
        username: "hazim",
        password: "123456",
        name: "zim",
        email: "hazim00@gmail.com"
    },
    {
        username: "firdaus",
        password: "654321",
        name: "Firdaus",
        email: "firdaus2210@gmail.com"
    },
    {
        username: "afnan",
        password: "7890",
        name: "afnan",
        email: "afnan76@gmail.com"
    }
]

function login(username, password) {
    let matchUser = dbUsers.find(
        user => user.username == username      //=> what to do with user
    )
    if (!matchUser) return "User not found!"
    if (matchUser.password == password) {
        return matchUser
    } else{
        return "Invalid password"
    }
    }

    function register(a, b, c, d) {
        dbUsers.push({
            username: a,
            password: b,
            name: c,
            email: d
        })
    }

//try to login
console.log(login("zim","123456"))             //cout
console.log(login("firdaus","654321"))
console.log(login("utem","password"))

//register("awin","150700","Awin","awincomel@gmail.com")

//console.log(login("awin","150700"))