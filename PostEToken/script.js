document.addEventListener("DOMContentLoaded", function() {
    const name = document.getElementById("nome");
    const email = document.getElementById("email");
    const password = document.getElementById("senha");
    const btn = document.getElementById("cadastro");
 
    btn.addEventListener("click", function(event) {
        event.preventDefault();
        
        const userData = JSON.stringify({
        name: name.value,
        email: email.value,
        password: password.value,
        });
        
        fetch("http://10.92.198.38:8080/auth/signup", {
            method: "POST",
            body: userData,
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })

        .then((result) => result.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    });
});

