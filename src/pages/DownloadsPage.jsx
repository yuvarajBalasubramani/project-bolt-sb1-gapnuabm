import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Download, Calendar, File, CheckCircle, AlertCircle } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext.jsx';

const DownloadsPage = () => {
  const { user } = useAuth();
  const location = useLocation();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    if (location.state?.orderComplete) {
      setShowSuccessMessage(true);
      // Clear the state to prevent showing the message on refresh
      window.history.replaceState({}, document.title);
      
      // Hide the success message after 5 seconds
      setTimeout(() => setShowSuccessMessage(false), 5000);
    }
  }, [location.state]);

  // Mock download data - in a real app, this would come from an API
  const mockDownloads = [
    {
      id: '1',
      productTitle: 'Premium UI Kit Bundle',
      productImage: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
      purchaseDate: '2024-01-15T10:00:00Z',
      downloadUrl: '/downloads/ui-kit-bundle.zip',
      fileSize: '245 MB',
      downloadCount: 3,
      status: 'available'
    },
    {
      id: '2',
      productTitle: 'React Developer Masterclass',
      productImage: 'https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg',
      purchaseDate: '2024-01-10T14:30:00Z',
      downloadUrl: '/downloads/react-masterclass.zip',
      fileSize: '4.2 GB',
      downloadCount: 1,
      status: 'available'
    }
  ];

  const handleDownload = (downloadUrl, productTitle) => {
    // In a real app, this would be a secure download link from your server
    console.log(`Downloading: ${productTitle} from ${downloadUrl}`);
    // For demo purposes, we'll just show an alert
    alert(`Download started: ${productTitle}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Message */}
        {showSuccessMessage && (
          <div className="mb-8 bg-green-50 border border-green-200 rounded-lg p-6">
            <div className="flex items-center">
              <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
              <div>
                <h3 className="text-lg font-semibold text-green-800">Purchase Successful!</h3>
                <p className="text-green-700 mt-1">
                  Your order has been completed. You can now download your products below.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Downloads</h1>
          <p className="text-gray-600">Access all your purchased digital products</p>
        </div>

        {/* Downloads List */}
        {mockDownloads.length > 0 ? (
          <div className="space-y-6">
            {mockDownloads.map((download) => (
              <div key={download.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center space-x-4">
                  <img
                    src={download.productImage}
                    alt={download.productTitle}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {download.productTitle}
                    </h3>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>
                          Purchased {new Date(download.purchaseDate).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <File className="h-4 w-4 mr-1" />
                        <span>{download.fileSize}</span>
                      </div>
                      <div className="flex items-center">
                        <Download className="h-4 w-4 mr-1" />
                        <span>{download.downloadCount} downloads</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        {download.status === 'available' ? (
                          <div className="flex items-center text-green-600">
                            <CheckCircle className="h-4 w-4 mr-1" />
                            <span className="text-sm font-medium">Ready to download</span>
                          </div>
                        ) : (
                          <div className="flex items-center text-yellow-600">
                            <AlertCircle className="h-4 w-4 mr-1" />
                            <span className="text-sm font-medium">Processing</span>
                          </div>
                        )}
                      </div>

                      <button
                        onClick={() => handleDownload(download.downloadUrl, download.productTitle)}
                        disabled={download.status !== 'available'}
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center group"
                      >
                        <Download className="h-4 w-4 mr-2 group-hover:translate-y-0.5 transition-transform" />
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Download className="h-24 w-24 text-gray-400 mx-auto mb-6" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No downloads yet</h3>
            <p className="text-gray-600 mb-8">
              When you purchase products, they'll appear here for download.
            </p>
            <a
              href="/products"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center group"
            >
              Browse Products
              <Download className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        )}

        {/* Download Instructions */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-3">Download Instructions</h3>
          <ul className="text-blue-700 text-sm space-y-2">
            <li>• All downloads are available immediately after purchase</li>
            <li>• You have unlimited downloads with lifetime access</li>
            <li>• Downloads are available for 24/7 access from your account</li>
            <li>• If you experience any issues, contact our support team</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DownloadsPage;