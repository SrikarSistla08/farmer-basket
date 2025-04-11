"use client";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect, useState } from 'react';

// Define types for our farmer data
interface Farmer {
  id: number;
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  products: string[];
  rating: number;
  image: string;
  type: 'vegetable' | 'dairy' | 'meat' | 'mixed';
}

// Sample farmer data - in a real app, this would come from your backend
const farmers: Farmer[] = [
  {
    id: 1,
    name: "Green Valley Farm",
    location: { lat: 37.7749, lng: -122.4194 },
    products: ["Vegetables", "Fruits"],
    rating: 4.8,
    image: "/pictures/farm1.jpg",
    type: "vegetable"
  },
  {
    id: 2,
    name: "Sunny Acres",
    location: { lat: 37.7833, lng: -122.4167 },
    products: ["Dairy", "Eggs"],
    rating: 4.6,
    image: "/pictures/farm2.jpg",
    type: "dairy"
  },
  {
    id: 3,
    name: "Mountain View Farm",
    location: { lat: 37.7750, lng: -122.4184 },
    products: ["Meat", "Honey"],
    rating: 4.9,
    image: "/pictures/farm3.jpg",
    type: "meat"
  }
];

const center = {
  lat: 37.7749,
  lng: -122.4194
};

// Icon colors for different farm types
const iconColors = {
  vegetable: '#4CAF50', // Green
  dairy: '#2196F3',    // Blue
  meat: '#F44336',     // Red
  mixed: '#FFC107'     // Yellow
};

// Custom SVG icons for different farm types
const createFarmIcon = (color: string) => {
  return L.divIcon({
    className: 'custom-div-icon',
    html: `
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="20" fill="${color}" fill-opacity="0.2"/>
        <circle cx="20" cy="20" r="15" fill="${color}" fill-opacity="0.4"/>
        <circle cx="20" cy="20" r="10" fill="${color}"/>
        <path d="M20 10L25 15H15L20 10Z" fill="white"/>
      </svg>
    `,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40]
  });
};

export default function Map() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Fix for default marker icons in Leaflet with Next.js
    delete (L.Icon.Default.prototype as { _getIconUrl?: string })._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: '/images/marker-icon-2x.png',
      iconUrl: '/images/marker-icon.png',
      shadowUrl: '/images/marker-shadow.png',
    });
  }, []);

  if (!isClient) {
    return (
      <div className="h-[500px] w-full rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
        <p className="text-gray-500">Loading map...</p>
      </div>
    );
  }

  return (
    <>
      <div className="h-[500px] w-full rounded-lg overflow-hidden">
        <MapContainer
          center={[center.lat, center.lng]}
          zoom={13}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {farmers.map((farmer) => (
            <Marker
              key={farmer.id}
              position={[farmer.location.lat, farmer.location.lng]}
              icon={createFarmIcon(iconColors[farmer.type])}
            >
              <Popup>
                <div className="p-2">
                  <h4 className="font-bold text-green-600">{farmer.name}</h4>
                  <p className="text-sm text-gray-600">Products: {farmer.products.join(', ')}</p>
                  <p className="text-sm text-gray-600">Rating: {farmer.rating} ⭐</p>
                  <button 
                    className="mt-2 text-sm text-green-600 hover:text-green-700"
                    onClick={() => window.location.href = `/farmers/${farmer.id}`}
                  >
                    View Farm Details →
                  </button>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Legend */}
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        <div className="flex items-center">
          <div className="w-4 h-4 rounded-full bg-[#4CAF50] mr-2"></div>
          <span className="text-sm text-gray-600">Vegetable Farms</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 rounded-full bg-[#2196F3] mr-2"></div>
          <span className="text-sm text-gray-600">Dairy Farms</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 rounded-full bg-[#F44336] mr-2"></div>
          <span className="text-sm text-gray-600">Meat Farms</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 rounded-full bg-[#FFC107] mr-2"></div>
          <span className="text-sm text-gray-600">Mixed Farms</span>
        </div>
      </div>

      <div className="mt-6 text-center">
        <p className="text-gray-600">
          Want to become a partner farmer? 
          <a href="/farmers" className="text-green-600 hover:text-green-700 ml-1">
            Contact us here
          </a>
        </p>
      </div>
    </>
  );
} 