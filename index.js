const submitData = (username, email) => {
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            "name": username,
            "email": email
        })
    })
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        const newUser = document.createElement("div")
        newUser.textContent = data.id
        document.body.append(newUser)
    })
    .catch(error => {
        alert("Something went wrong.")
        const errorMsg = document.createElement("div")
        errorMsg.textContent = "Unauthorized Access"
        document.body.append(errorMsg)
        console.log("Something went wrong.")
    } )
}
