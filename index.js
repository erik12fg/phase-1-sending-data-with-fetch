const nameAndEmail = {
    name: "Steve",
    email: "steve@steve.com",
};

const configObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify(nameAndEmail),
};

function submitData (name, email) {
    return fetch("http://localhost:3000/users", configObject)
        .then(resp => resp.json())
        .then(object => document.querySelector('body').innerHTML = object.id)
        .catch(error => {
            alert("something went wrong!");
            document.querySelector('body').append(error.message);
        })
}