export const fetchImages = async (setter) => {
    try {
        const res = await fetch("https://picsum.photos/v2/list");
        const data = await res.json();
        setter(data);
    } catch (error) {
        console.log(error);
    }
}

export const createUser = async (username, email, password, setter) => {
    try {
        const res = await fetch(`${process.env.REACT_APP_REST_API}user`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
            }),
        });
        const data = await res.json();
        console.log(data)
        if (data.error) {
            throw new Error(data.error);
        }
        setter(data.newUser.username);
    } catch (error) {
        console.log(error);
    }
};

export const logIn = async (username, password, setter) => {
    try {
        const res = await fetch(`${process.env.REACT_APP_REST_API}login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        });
        const data = await res.json();
        setter(data.user.username);
    } catch (error) {
        console.log(error);
    }
};

export const deleteUser = async (username, setter) => {
    try {
        const res = await fetch(`${process.env.REACT_APP_REST_API}${username}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        });
        const data = await res.json();
        setter(data.user.username);
        console.log(username, "has been succesfully deleted")
    } catch (error) {
        console.log(error);
    }
}