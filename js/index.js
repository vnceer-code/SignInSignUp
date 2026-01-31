let users = JSON.parse(localStorage.getItem("users")) || [];
let currentUser = null;


function register() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const city = document.getElementById("city").value;
    const password = document.getElementById("password").value;
    const confirmpassword = document.getElementById("confirmpassword").value;
    if (!name || !email || !phone || !city || !password || !confirmpassword) {
        alert("All fields required");
        return;
    }

    if (password !== confirmpassword) {
        alert("Passwords do not match ❌");
        return;
    }
    if (phone.length !== 10) {
        alert("Invalid Phone number");
        return;
    }
    let x = users.find((user) => {
        return user.email == email || user.phone == phone
    });

    if (x) {
        alert("Already registered with this email or phone number");
        return;
    }

    let newUser = {
        id: Date.now(),
        name,
        email,
        phone,
        city,
        password,
        confirmpassword

    }

    users.push(newUser);
    console.log(users);
    updateStorage();
    alert("User registered successfully");
}


function updateStorage() {
    localStorage.setItem("users", JSON.stringify(users));
    console.log("success");
}
function login(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (!email || !password) {
        return alert("Fill all fields");

    }
    let x = users.find((user) => {
        return user.email == email;
    });
    if (!x) {
        alert("User not registered");
        return;

    }

    let isValid = x.password == password;
    if (!isValid) {
        return alert("Invalid credentials");
    }

    currentUser = x;

    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    console.log(password);


    window.location.href = "travelapp.html";

}

function check() {
    let isLogged = JSON.parse(localStorage.getItem("currentUser"));
    if (!isLogged) {
        window.location.href = "SignIn.html";
    }
}

function loggedOut() {
    localStorage.removeItem("currentUser");
    window.location.href = "SignIn.html";
}





