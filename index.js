// Add your code here
function submitData(name, email) {
    const configObj = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',},
            body: JSON.stringify(
                {name: `${name}`,
                email: `${email}`,
            })
        }
        return fetch('http://localhost:3000/users', configObj)
        .then(resp => resp.json())
        .then(newObj => document.querySelector('body').innerHTML = newObj.id)
        .catch(error => document.querySelector('body').innerHTML = error)
    }
