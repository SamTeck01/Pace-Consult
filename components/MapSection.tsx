interface MapSectionProps {
  lat?: number | null;
  lng?: number | null;
  address?: string;
}

export default function MapSection({ lat, lng, address }: MapSectionProps) {
  return (
    <div className="rounded-lg border border-gray-200 overflow-hidden">
      <div className="aspect-video w-full bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
        {lat != null && lng != null ? (
          <span>Map: {lat}, {lng} (integrate Google Maps or Mapbox)</span>
        ) : (
          <span>Map placeholder — add coordinates for “On map”</span>
        )}
      </div>
      {address && (
        <p className="border-t border-gray-200 bg-gray-50 px-4 py-2 text-sm text-gray-600">
          {address}
        </p>
      )}
    </div>
  );
}
