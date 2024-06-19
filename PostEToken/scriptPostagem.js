document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const cadastroButton = document.getElementById("cadastro");

    cadastroButton.addEventListener("click", function(event) {
        event.preventDefault();

        const titleInput = document.getElementById("title").value;
        const contentInput = document.getElementById("content").value;
        const imageInput = document.getElementById("image").files[0]; 

        const formData = new FormData();
        formData.append("title", titleInput);
        formData.append("content", contentInput);
        formData.append("image", imageInput);

        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkRhbmlsbzQ3QGdtYWlsLmNvbSIsInVzZXJJZCI6IjY2NDM5OGJjNTA3ODJhNWM1MGNiNjUzYiIsImlhdCI6MTcxNTcxMjY3MywiZXhwIjoxNzE1NzI3MDczfQ.l-s0fEe8JkQFI-fbYrnIA3DGmNau9EYhqi6MIFC88Vo'; 
        
        console.log(formData)
        
        fetch('http://10.92.198.38:8080/feed/post', {
            method: "POST",
            body: formData,
            headers: {
                "Authorization": `Bearer ${token}`
            },
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao cadastrar postagem');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);  
            alert("Postagem cadastrada com sucesso!");
            form.reset(); 
        })
        .catch(error => {
            console.error('Erro:', error);
            alert("Erro ao cadastrar postagem. Verifique os dados e tente novamente.");
        });
    });
});
