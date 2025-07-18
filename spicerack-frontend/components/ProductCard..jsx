export default function ProductCard({product}){
    return (
        <div className="bg-white shadow-md rounded-lg p-4 w-full">
            <img src={product.image} alt={product.title} className="h-48 w-full object-cover rounded"/>
            <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
            <p className="text-sm text-gray-500">{product.shop}</p>
            <div className="flex items-center mt-2">
                <span className="text-yellow-500">{product.rating}</span>
                <span className="text-gray-500 ml-1 text-sm">({product.reviews})</span>
            </div>
            <div className="mt-2">
                <span className="text-lg font-bold">${product.price}</span>
                {
                    product.old_price && (
                        <span className="text-sm line-through text-gray-400 ml-2">${product.old_price}</span>


                    )}
            </div>
            {product.free_shipping && <p className="text-green-600 text-xs mt-1"> Free Shipping</p>}
            <button className="bg-orange-500 hover:bg-orange-500 text-white px-4 py-2 rounded mt-3 w-full">
                Add To Cart
            </button>
        </div>
    )
}