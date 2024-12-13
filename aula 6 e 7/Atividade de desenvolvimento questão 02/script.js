document.getElementById("animalSelect").addEventListener("change", async function () {
    const animalType = this.value;
    const animalList = document.getElementById("animalList");
  
    animalList.innerHTML = "";
  
    if (animalType) {
      try {
        const response = await fetch(`${animalType}.json`);
        const animals = await response.json();
  
        animals.forEach(animal => {
          const listItem = document.createElement("li");
          listItem.className = "list-group-item";
          listItem.textContent = `${animal.nome} - ${animal.raca}`;
          animalList.appendChild(listItem);
        });
      } catch (error) {
        console.error("Erro ao carregar os dados:", error);
      }
    }
  });
  
  
  
  