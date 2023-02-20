const cocktailWrapper = document.getElementById("cocktail-wrapper");
const overlay = document.getElementById("overlay");

fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic")
  .then((response) => response.json())
  .then((data) => {
    const cocktailList = data.drinks;
    cocktailList.forEach((cocktail) => {
      const card = document.createElement("div");
      card.classList.add("cocktail-card");
      const image = document.createElement("img");
      image.src = cocktail.strDrinkThumb;
      const cocktailName = document.createElement("p");
      cocktailName.innerText = cocktail.strDrink;

      cocktailWrapper.appendChild(card);
      card.appendChild(image);
      card.appendChild(cocktailName);

      card.addEventListener("click", () => {
        fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktail.idDrink}`
        )
          .then((response) => response.json())
          .then((data) => {
            overlay.classList.remove("hidden");

            let ingredientElements = "";
            let i = 1;
            let currentIngredient = data.drinks[0][`strIngredient${i}`];

            while (currentIngredient) {
              ingredientElements += `<p>${currentIngredient}</p>`;
              i += 1;
              currentIngredient = data.drinks[0][`strIngredient${i}`];
            }

            overlay.innerHTML = `
              <article class="cocktail-info-wrapper">
                <img src="${data.drinks[0].strDrinkThumb}"/>
                <div>
                  <h2>${data.drinks[0].strDrink}</h2>
                  ${ingredientElements}
                  <p>${data.drinks[0].strInstructions}</p>
                </div>
              </article>
            `;
          });
      });

      // cocktailWrapper.innerHTML += `
      //   <div class="cocktail-card" id="cocktail-card">
      //       <img src="${cocktail.strDrinkThumb}"/>
      //       <p>${cocktail.strDrink}</p>
      //   </div>
      //  `;
    });
  });
