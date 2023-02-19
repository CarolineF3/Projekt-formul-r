const cocktailWrapper = document.getElementById("cocktail-wrapper");

fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic")
  .then((response) => response.json())
  .then((data) => {
    const cocktailList = data.drinks;
    cocktailList.forEach((cocktail) => {
      cocktailWrapper.innerHTML += `
        <div class="cocktail-card" id="cocktail-card">      
            <img src="${cocktail.strDrinkThumb}"/>
            <p>${cocktail.strDrink}</p>
        </div>
       `;
    });
  });
