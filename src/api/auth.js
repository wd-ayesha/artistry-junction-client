
// save a user to db
export const saveUser = user => {
    const currentUser = {
     email: user.email,
    }

    fetch(`https://artistry-junction-server-wd-ayesha.vercel.app/users/${user?.email}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(currentUser),
    })
    .then(res => res.json())
    .then(data => console.log(data))
}