import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CategoriesEmpty from './CategoriesEmpty';
import CategoriesAllProducts from './CategoriesAllProducts';
import Loading from './Loading';

const Categories = () => {

    const { categoryName } = useParams();
    const [products, setProducts] = useState([]);
    const [dataLoading, setDataLoading] = useState(true);

    const handleSort = (type) => {
        if (type !== "all") {
            fetchProducts(type);
            return;
        } else {
            fetchAllProducts();
            return;
        }
    }

    const fetchAllProducts = async () => {
        setDataLoading(true);
        try {
            const response = await fetch('http://localhost:3000/allproducts');
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
        finally {
            setDataLoading(false);
        }
    };

    const fetchProducts = async (categoryName) => {
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

    useEffect(() => {
        handleSort(categoryName);
    }, []);

    if (dataLoading) {
        return <Loading></Loading>;
    }

    return (
        <div className='max-w-[1600px] mx-auto px-4 py-2 lg:py-8'>

            <div className='flex justify-center items-center mb-24'>
                <div className="join join-vertical lg:join-horizontal">

                    <button onClick={() => handleSort("all")} className="btn join-item focus:btn-success">All</button>

                    <button onClick={() => handleSort("clothe")} className="btn join-item focus:btn-success">Clothe</button>

                    <button onClick={() => handleSort("furniture")} className="btn join-item focus:btn-success">Furniture</button>

                    <button onClick={() => handleSort("homeAppliances")} className="btn join-item focus:btn-success">Home Appliances</button>

                    <button onClick={() => handleSort("accessories")} className="btn join-item focus:btn-success">Accessories</button>

                    <button onClick={() => handleSort("jewelry")} className="btn join-item focus:btn-success">Jewelry</button>
                    
                    <button onClick={() => handleSort("consumerElectronics")} className="btn join-item focus:btn-success">Consumer Electronics</button>
                </div>
            </div>

            {
                products.length === 0 ? <CategoriesEmpty></CategoriesEmpty> : <CategoriesAllProducts products={products}></CategoriesAllProducts>
            }
        </div>
    );
};

export default Categories;