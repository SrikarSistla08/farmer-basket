"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Header from "@/components/Header";
import Image from "next/image";

interface Farmer {
  _id: string;
  name: string;
  farmName: string;
  image: string;
  contactPerson: string;
  email: string;
  phone: string;
  farmLocation: string;
  farmSize: string;
  products: string[];
  type: string;
  rating: number;
  farmDescription: string;
  location: {
    lat: number;
    lng: number;
  };
}

export default function FarmerDetail() {
  const { id } = useParams();
  const [farmer, setFarmer] = useState<Farmer | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/farmers/${id}`)
      .then(res => res.json())
      .then(data => {
        setFarmer(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error:', err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!farmer) return <div>Farmer not found</div>;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage="farmers" />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="relative h-64 sm:h-80">
            <Image
              src={farmer.image}
              alt={farmer.farmName}
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <div className="p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl font-bold text-gray-800">{farmer.farmName}</h1>
              <div className="flex">
                {[...Array(farmer.rating)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Farm Information</h2>
                <dl className="space-y-2">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Location</dt>
                    <dd className="text-gray-800">{farmer.farmLocation}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Farm Size</dt>
                    <dd className="text-gray-800">{farmer.farmSize} acres</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Farm Type</dt>
                    <dd className="text-gray-800 capitalize">{farmer.type}</dd>
                  </div>
                </dl>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h2>
                <dl className="space-y-2">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Contact Person</dt>
                    <dd className="text-gray-800">{farmer.contactPerson}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Email</dt>
                    <dd className="text-gray-800">{farmer.email}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Phone</dt>
                    <dd className="text-gray-800">{farmer.phone}</dd>
                  </div>
                </dl>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Products</h2>
              <div className="flex flex-wrap gap-2">
                {farmer.products.map((product, index) => (
                  <span
                    key={index}
                    className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                  >
                    {product}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">About the Farm</h2>
              <p className="text-gray-600">{farmer.farmDescription}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}