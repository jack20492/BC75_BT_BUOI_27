// Modal.js
import React from "react";

export default function Modal({ data, onClose }) {
  if (!data) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-5 max-w-lg w-full relative">
        {/* Nút đóng ở góc trên */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-700 dark:text-gray-200 hover:text-gray-900 text-2xl"
        >
          &times;
        </button>

        {/* Nội dung chi tiết sản phẩm */}
        <img className="w-full rounded" src={data.image} alt="product image" />
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-4">
          {data.name}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mt-2">
          {data.description}
        </p>
        <p className="text-gray-700 dark:text-gray-300 mt-2">
          Quantity: {data.quantity}
        </p>
        <p className="text-gray-900 dark:text-white font-semibold mt-4">
          Price: ${data.price}
        </p>

        {/* Nút Close ở dưới cùng */}
        <div className="mt-4 text-center">
          <button
            onClick={onClose}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
