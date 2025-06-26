import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Star, 
  Download, 
  ShoppingCart, 
  Heart, 
  Share2, 
  FileText, 
  Monitor, 
  Smartphone,
  ArrowLeft,
  Check
} from 'lucide-react';
import { products } from '../data/products.js';
import { useCart } from '../contexts/CartContext.jsx';
import { useAuth } from '../contexts/AuthContext.jsx';

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('description');
  const [isWishlisted, setIsWishlisted] = useState(false);

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
          <button
            onClick={() => navigate('/products')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Browse Products
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleBuyNow = () => {
    addToCart(product);
    navigate('/checkout');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-8 group"
        >
          <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Products
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-w-16 aspect-h-9 bg-white rounded-2xl overflow-hidden shadow-lg">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-96 object-cover"
              />
            </div>
            
            {/* Product Features */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg text-center shadow-sm">
                <FileText className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <span className="text-sm text-gray-600">High Quality</span>
              </div>
              <div className="bg-white p-4 rounded-lg text-center shadow-sm">
                <Monitor className="h-6 w-6 text-green-600 mx-auto mb-2" />
                <span className="text-sm text-gray-600">Web Ready</span>
              </div>
              <div className="bg-white p-4 rounded-lg text-center shadow-sm">
                <Smartphone className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                <span className="text-sm text-gray-600">Mobile Optimized</span>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  {product.category}
                </span>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className={`p-2 rounded-full transition-colors ${
                      isWishlisted ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-current' : ''}`} />
                  </button>
                  <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {product.title}
              </h1>

              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm font-medium text-gray-700">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
                <span className="text-sm text-gray-500">•</span>
                <span className="text-sm text-gray-600">{product.fileSize}</span>
              </div>

              <div className="flex items-center space-x-4 mb-8">
                <span className="text-4xl font-bold text-gray-900">
                  ${product.price}
                </span>
                <div className="flex items-center text-green-600">
                  <Download className="h-4 w-4 mr-1" />
                  <span className="text-sm font-medium">{product.reviews} downloads</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <button
                onClick={handleBuyNow}
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center group"
              >
                Buy Now - Instant Download
                <Download className="ml-2 h-5 w-5 group-hover:translate-y-0.5 transition-transform" />
              </button>
              
              <button
                onClick={handleAddToCart}
                className="w-full border-2 border-blue-600 text-blue-600 py-4 px-6 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center group"
              >
                Add to Cart
                <ShoppingCart className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              </button>
            </div>

            {/* What's Included */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-3">What's Included:</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-green-700">
                  <Check className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span className="text-sm">Instant download after purchase</span>
                </li>
                <li className="flex items-center text-green-700">
                  <Check className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span className="text-sm">Lifetime access and updates</span>
                </li>
                <li className="flex items-center text-green-700">
                  <Check className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span className="text-sm">Commercial license included</span>
                </li>
                <li className="flex items-center text-green-700">
                  <Check className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span className="text-sm">24/7 customer support</span>
                </li>
              </ul>
            </div>

            {/* Tags */}
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-3">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('description')}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'description'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'reviews'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Reviews ({product.reviews})
              </button>
              <button
                onClick={() => setActiveTab('details')}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'details'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Details
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  {product.description}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  This premium digital product has been carefully crafted by our expert team to provide you with the highest quality assets for your creative projects. Whether you're a designer, developer, or creative professional, this product will help you save time and create stunning results.
                </p>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Customer Reviews</h3>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">{product.rating} out of 5</span>
                  </div>
                </div>
                <div className="text-gray-600">
                  Reviews feature coming soon. Join our community to be the first to leave a review!
                </div>
              </div>
            )}

            {activeTab === 'details' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Product Details</h3>
                  <dl className="space-y-3">
                    <div>
                      <dt className="text-sm font-medium text-gray-700">File Size</dt>
                      <dd className="text-sm text-gray-600">{product.fileSize}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-700">Category</dt>
                      <dd className="text-sm text-gray-600">{product.category}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-700">Created</dt>
                      <dd className="text-sm text-gray-600">
                        {new Date(product.createdAt).toLocaleDateString()}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-700">Downloads</dt>
                      <dd className="text-sm text-gray-600">{product.reviews}</dd>
                    </div>
                  </dl>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">License Information</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    This product comes with a commercial license that allows you to use it in both personal and commercial projects.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>✓ Personal use allowed</li>
                    <li>✓ Commercial use allowed</li>
                    <li>✓ Modify and customize</li>
                    <li>✗ Resale or redistribution</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;