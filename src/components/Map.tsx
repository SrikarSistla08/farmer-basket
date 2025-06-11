"use client";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import Link from 'next/link';

type FarmType = 'vegetable' | 'dairy' | 'meat' | 'mixed';

interface Farmer {
  _id: string;
  name: string;
  farmName: string;
  location: { lat: number; lng: number };
  type: FarmType;
  products: string[];
}

export default function Map() {
  const [farmers, setFarmers] = useState<Farmer[]>([]);
  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [customIcon, setCustomIcon] = useState<L.Icon | null>(null);

  useEffect(() => {
    setIsClient(true);

    // Adjust icon settings for SVG
    const icon = L.icon({
      iconUrl: '/images/pin.svg',
      iconSize: [24, 24],       // Smaller size for SVG
      iconAnchor: [12, 24],     // Center bottom of icon
      popupAnchor: [0, -24],    // Centered above icon
      className: 'svg-pin'      // Add custom class for styling
    });
    setCustomIcon(icon);

    // Fetch farmers data
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

  if (!isClient || !customIcon) return null;
  if (isLoading) return <div>Loading map...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="h-[500px] w-full rounded-lg overflow-hidden">
      <MapContainer
        center={[37.7749, -122.4194]}
        zoom={13}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {farmers.map((farmer) => (
          <Marker
            key={farmer._id}
            position={[farmer.location.lat, farmer.location.lng]}
            icon={customIcon}
          >
            <Popup>
              <div className="p-2">
                <h3 className="font-bold text-lg mb-2">{farmer.farmName}</h3>
                <p className="text-sm mb-1">Owner: {farmer.name}</p>
                <p className="text-sm mb-1">Type: {farmer.type}</p>
                <p className="text-sm mb-2">
                  Products: {farmer.products.join(", ")}
                </p>
                <Link 
                  href={`/farmers/${farmer._id}`}
                  className="text-green-600 hover:text-green-800 text-sm font-semibold"
                >
                  View Farm Details →
                </Link>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}