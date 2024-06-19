document.addEventListener("DOMContentLoaded", function() {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("senha");
    const loginButton = document.getElementById("login");

    loginButton.addEventListener("click", function(event) {
        event.preventDefault();

        const userData = JSON.stringify({
            email: emailInput.value,
            password: passwordInput.value
        });

        fetch("http://10.92.198.38:8080/auth/signin", {
            method: "POST",
            body: userData,
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao realizar o login');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);  
        })
        .catch(error => {
            console.error('Erro:', error);
        });
    });
});
