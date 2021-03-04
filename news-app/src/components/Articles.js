import React from "react";
import "../App.css"

const Articles = ({article}) => {
    const {title, publishedAt, urlToImage, description} = article;
    
    function handleClick(e) {
        console.log(e.target.id);
    }

    return(
            <div class="card">
                <div class="card-body">
                    <h2 class="card-title">{title}</h2>
                    <h6 class="card-subtitle mb-2 text-muted">{publishedAt}</h6>
                    <div class="container">
                        <img class="container-img" src={urlToImage} alt={title} />
                        <p class="container-text">{description}</p>
                    </div>
                </div>            
            </div>
    )
};

export default Articles;
