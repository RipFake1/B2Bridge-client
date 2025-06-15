export const categoriesPromise = category => {
    return fetch(`http://localhost:3000/categories?category=${category}`).then(res => res.json());
}