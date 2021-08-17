const categories = document.querySelector(".categories");
const animals = document.getElementById("animals");
const jobs = document.getElementById("jobs");
const sports = document.getElementById("sports");
const fruits = document.getElementById("fruits");
const cars = document.getElementById("cars");
const colors = document.getElementById("colors");

const database_animals = ["Lew", "Szynszyl", "Koala", "Komar", "Wydra", "Skunks", "Gepard", "Goryl", "Orangutan", "Mysz"];
const database_jobs = ["Sportowiec", "Nauczyciel", "Policjant", "Murarz", "Prawnik", "Lekarz", "Architekt", "Programista", "Marketer", "Kasjer"];
const database_sports = ["Szermierka", "Szachy", "Poker", "Hokej", "Rugby", "Tenis", "Baseball", "Boks", "Biegi", "Kajakarstwo"];
const database_food = ["Pomidor", "Malina", "Melon", "Arbuz", "Brzoskwinia", "Mandarynka", "Kapusta", "Marchewka", "Kalafior", "Seler"];
const database_cars = ["Audi", "Mercedes", "BMW", "Maybach", "Suzuki", "Toyota", "Bugatti", "Chevrolet", "Maserati", "Lamborghini"];
const database_colors = ["Niebieski", "Czarny", "Czerwony", "Fioletowy", "Szary", "Granatowy", "Kremowy", "Zielony", "Seledynowy", "Turkusowy"]; 

function categoriesHandler(databaseChoice) {
    categories.style.display = "none";
    container.style.display = "block";
    database = databaseChoice;
    game();
}

function keyboardChoice() {
    if (event.keyCode>=49 && event.keyCode<=54) {
        const category = String.fromCharCode(event.keyCode);
        switch (category) {
            case "1":
                categoriesHandler(database_animals);
                break;
            case "2":
                categoriesHandler(database_jobs);
                break;
            case "3":
                categoriesHandler(database_sports);
                break;
            case "4":
                categoriesHandler(database_food);
                break;
            case "5":
                categoriesHandler(database_cars);
                break;
            case "6":
                categoriesHandler(database_colors);
                break;
        }
    }
}

animals.addEventListener("click", categoriesHandler.bind(this, database_animals));

jobs.addEventListener("click", categoriesHandler.bind(this, database_jobs));

sports.addEventListener("click", categoriesHandler.bind(this, database_sports));

fruits.addEventListener("click", categoriesHandler.bind(this, database_food));

cars.addEventListener("click", categoriesHandler.bind(this, database_cars));

colors.addEventListener("click", categoriesHandler.bind(this, database_colors));

document.addEventListener("keydown",  keyboardChoice);