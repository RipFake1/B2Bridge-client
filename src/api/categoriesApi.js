export const categoriesPromise = category => {
    return fetch(`https://btobridge-server.vercel.app/categories?category=${category}`).then(res => res.json());
}