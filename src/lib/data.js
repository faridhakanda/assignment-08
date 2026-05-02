// export const getCategories = async() => {
//     const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
//     const data = await res.json();
//     return data;
// }


export const getAnimals = async() => {
    const res = await fetch('https://assignment-08-dataset.onrender.com/animals');
    const data = await res.json();
    return data;
}


export const getAnimalDetails = async(id) => {
    const res = await fetch(`https://assignment-08-dataset.onrender.com/animals/${id}`);
    const data = await res.json();
    return data;
}