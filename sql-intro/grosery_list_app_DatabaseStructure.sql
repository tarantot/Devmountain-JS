/*
I. users
- id PK
- email
- password
*/
CREATE TABLE Users (
    id serial NOT NULL,
    email VARCHAR(100),
    password VARCHAR(200),
    PRIMARY KEY (id)
);


/*
II. recipes
- users.id FK
- recipe_id PK
- recipe
*/
CREATE TABLE Recipes (
    recipe_id serial NOT NULL,
    recipe VARCHAR(7777),
    user_id INT,
    PRIMARY KEY(recipe_id),
    FOREIGN KEY(user_id)
        REFERENCES Users(id)
            ON DELETE SET NULL
);


/*
III. ingredients
- ingredient_id PK
- ingredient 
*/
CREATE TABLE Ingredients (
    ingredient_id serial NOT NULL PRIMARY KEY,
    ingredient VARCHAR(50)
);


/*
IV. ingrediends&recipes
- ingredients.ingredient_id FK
- recipes.recipe_id PK
*/
CREATE TABLE IngredientsAndRecipes (
    ingredient_id INT FOREIGN KEY 
        REFERENCES Ingredients(ingredient_id)
            ON DELETE SET NULL,
    recipe_id INT PRIMARY KEY 
        REFERENCES Recipes(recipe_id)
            ON DELETE CASCADE
);


/*
V. grocery lists
- groseryList_id
- users.id FK
*/
CREATE TABLE GroceryList (
    groseryList_id serial NOT NULL PRIMARY KEY,
    user_id INT FOREIGN KEY 
        REFERENCES Users(id)
            ON DELETE CASCADE
);


/*
VI. grocery lists content
- grocery lists.groseryList_id FK
- ingredients.ingredient_id FK
*/
CREATE TABLE GroceryListsContent (
    groceryList_id INT 
        REFERENCES GroceryList(groseryList_id)
            ON DELETE CASCADE,
    ingredient_id INT
        REFERENCES ingredients(ingredient_id) 
            ON DELETE CASCADE
)


/*
VI. pecipes_visibility
- recipes.recipe_id
- public (TRUE / FALSE)
*/
CREATE TABLE RecipesVisibility (
    recipe_id INT PRIMARY KEY 
        REFERENCES Recipes(recipe_id)
            ON DELETE CASCADE,
    is_public CHAR(1) DEFAULT 'T' CHECK (is_public IN ('T','F'))
);