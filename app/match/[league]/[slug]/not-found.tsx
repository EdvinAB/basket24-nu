import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-6xl mb-4">🏀</div>
        <h1 className="text-3xl font-bold text-dark mb-2">
          Match hittades inte
        </h1>
        <p className="text-gray-600 mb-6">
          Vi kunde tyvärr inte hitta den matchen du sökte efter.
        </p>
        <Link 
          href="/"
          className="inline-block bg-primary text-white px-6 py-3 font-bold hover:bg-primary-dark transition-colors"
        >
          Tillbaka till startsidan
        </Link>
      </div>
    </div>
  );
}
