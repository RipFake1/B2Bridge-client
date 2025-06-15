import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CategoriesEmpty from './CategoriesEmpty';
import CategoriesAllProducts from './CategoriesAllProducts';
import Loading from './Loading';

const Categories = () => {

    const { categoryName } = useParams();
    const [products, setProducts] = useState([]);
    const [dataLoading, setDataLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            setDataLoading(true);
            try {
                const response = await fetch(`http://localhost:3000/categories?category=${categoryName}`);
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
            finally {
                setDataLoading(false);
            }
        };

        fetchProducts();
    }, [categoryName]);

    if (dataLoading) {
        return <Loading></Loading>;
    }

    return (
        <div className='max-w-[1600px] mx-auto px-4 py-2 lg:py-8'>
            {
                products.length === 0 ? <CategoriesEmpty></CategoriesEmpty> : <CategoriesAllProducts products={products}></CategoriesAllProducts>
            }
        </div>
    );
};

export default Categories;