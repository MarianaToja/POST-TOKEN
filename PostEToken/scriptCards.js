document.addEventListener("DOMContentLoaded", function() {
    const postsContainer = document.getElementById("posts-container");

    const createCard = (imageUrl, title, subtitle) => {
        const card = document.createElement('div');
        card.className = 'card';
    
        const imgDiv = document.createElement('div');
        imgDiv.className = 'img';
    
        const img = document.createElement('img');
        img.className = 'imagem';
        img.src = imageUrl;
        img.alt = '';

        
        img.onerror = () => {
            img.src = 'images/default-image.png'; 
            console.error(`Falha ao carregar a imagem: ${imageUrl}`);
        };
    
        imgDiv.appendChild(img);
    
        const contentDiv = document.createElement('div');
        contentDiv.className = 'conteudo';

        const titleH3 = document.createElement('h3');
        titleH3.className = 'titulo';
        titleH3.textContent = title;
    
        const subtitleH5 = document.createElement('h5');
        subtitleH5.className = 'sub';
        subtitleH5.textContent = subtitle;
    
        contentDiv.appendChild(titleH3);
        contentDiv.appendChild(subtitleH5);
    
        card.appendChild(imgDiv);
        card.appendChild(contentDiv);
    
        postsContainer.appendChild(card);
    };

    const fetchPosts = async () => {
        try {
            const response = await fetch('http://10.92.198.38:8080/feed/posts');
            if (!response.ok) {
                throw new Error('Erro ao buscar postagens');
            }
            const card = await response.json();
            card.posts.forEach(post => {
                const imageUrl = post.imageUrl.startsWith('http') ? post.imageUrl : `http://10.92.198.38:8080/${post.imageUrl}`;
                const title = post.title;
                const subtitle = post.content;
                createCard(imageUrl, title, subtitle);
                console.log(imageUrl)
            });
        } catch (error) {
            console.error('Erro:', error);
            alert("Postagens não encontradas");
        }
    };

    fetchPosts();
});
