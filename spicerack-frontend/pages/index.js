import {useEffect, useState} from "react";
import ProductCard from "../components/ProductCard.";


export default function Home() {
    const [products, setProduts] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/products/")
        .then(res => res.json())
        .then(data => setProduts(data));
    }, []);

    return (
        <div className="bg-blue-900 min-h-screen text-white p-8">
            <h1 className="text-3xl font-bold mb-6">The Spice Rack</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

        </div>
    );
}