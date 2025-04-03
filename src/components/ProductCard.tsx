import { Product } from "../interfaces/types";

interface Props {
  product: Product;
  onDragStart: (e: React.DragEvent, product: Product) => void
}

export const ProductCard: React.FC<Props> = ({ product, onDragStart }) => {
  return (
    <div className="product-card border border-gray-200" draggable onDragStart={(e) => onDragStart(e, product)}>
      <div className="flex justify-center p-4 border-b border-gray-200">
        <img src={product.image} alt={product.name} width={150} height={150} />
      </div>
      <div className="p-4 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <h3 className="text-xl truncate max-w-[70%] text-gray-700">{product.name}</h3>
          <span className="text-2xl text-cyan-500 font-bold">$ {product.price}</span>
        </div>
      </div>

      {product.description && (
        <div className="p-4">
          <p
            className="text-sm text-gray-600"
            dangerouslySetInnerHTML={{ __html: product.description }}
          />
        </div>
      )}
    </div>
  )
}
