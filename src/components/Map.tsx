"use client";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useParams } from "next/navigation";

type FarmType = 'vegetable' | 'dairy' | 'meat' | 'mixed';

// Update Farmer interface for FarmerDetail
interface Farmer {
  _id: string;
  name: string;
  location: { lat: number; lng: number };
  products: string[];
  rating: number;
  type: FarmType;
  image: string;
  farmDescription?: string;
}

export default function Map() {
  const [farmers, setFarmers] = useState<Farmer[]>([]);
  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const center = {
    lat: 37.7749,
    lng: -122.4194
  };

  useEffect(() => {
    setIsClient(true);
    // Fix for default marker icons in Leaflet with Next.js
    delete (L.Icon.Default.prototype as { _getIconUrl?: string })._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: '/images/marker-icon-2x.png',
      iconUrl: '/images/marker-icon.png',
      shadowUrl: '/images/marker-shadow.png',
    });

    // Fetch farmers from backend
    fetch("http://localhost:5000/farmers")
      .then((res) => res.json())
      .then((data) => {
        setFarmers(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(`Failed to fetch farmers: ${err}`);
        setIsLoading(false);
      });
  }, []);

  // Icon colors for different farm types
  const iconColors: Record<FarmType, string> = {
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

  if (!isClient) {
    return (
      <div className="h-[500px] w-full rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
        <p className="text-gray-500">Loading map...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-[500px] w-full rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="h-[500px] w-full rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <Image
            src="/cowboy.svg"
            alt="Loading..."
            width={32}
            height={32}
            className="w-8 h-8 animate-bounce mb-2"
          />
          <p className="text-gray-500">Loading map...</p>
        </div>
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
              key={farmer._id}
              icon={createFarmIcon(iconColors[farmer.type as FarmType] ?? '#888')}
              position={[farmer.location.lat, farmer.location.lng]}
            >
              <Popup>
                <div className="p-2">
                  <h4 className="font-bold text-green-600">{farmer.name}</h4>
                  <p className="text-sm text-gray-600">Products: {farmer.products.join(', ')}</p>
                  <p className="text-sm text-gray-600">Rating: {farmer.rating} ⭐</p>
                  <button 
                    className="mt-2 text-sm text-green-600 hover:text-green-700"
                    onClick={() => window.location.href = `/farmers/${farmer._id}`}
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

      {/* <div className="mt-6 text-center">
        <p className="text-gray-600">
          Want to become a partner farmer? 
          <a href="/farmers" className="text-green-600 hover:text-green-700 ml-1">
            Contact us here
          </a>
        </p>
      </div> */}
    </>
  );
}

// Update FarmerDetail to use proper types and Next.js Image
export function FarmerDetail() {
  const { id } = useParams();
  const [farmer, setFarmer] = useState<Farmer | null>(null);
  const [imageError, setImageError] = useState(false);
  
  // Update default image path to use valley.jpg
  const defaultImage = "/pictures/valley.jpg";

  useEffect(() => {
    fetch(`http://localhost:5000/farmers/${id}`)
      .then((res) => res.json())
      .then(setFarmer)
      .catch(console.error);
  }, [id]);

  if (!farmer) return <div>Loading...</div>;

  return (
    <div>
      <h1>{farmer?.name}</h1>
      <div className="relative h-64 w-full">
        <Image
          src={imageError ? defaultImage : (farmer?.image || defaultImage)}
          alt={farmer?.name || 'Farm Image'}
          fill
          className="object-cover"
          onError={() => setImageError(true)}
          priority
        />
      </div>
      <p>Type: {farmer.type}</p>
  );  <p>Products: {farmer.products.join(", ")}</p>
}     <p>Location: {farmer.location.lat}, {farmer.location.lng}</p>
    </div>
  );
}