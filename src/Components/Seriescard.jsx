export const Seriescard = ({ curElem }) => {
  const { img_url, name, rating, description, genre, cast, watch_url } = curElem;

  return (
    <div className="card max-w-md mx-auto bg-white rounded-lg shadow-lg border overflow-hidden">
      {/* Image Section */}
      <div className="w-full">
        <img 
          src={img_url} 
          alt={name} 
          className="w-full h-64 object-cover" 
        />
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">
          {name}
        </h2>
        
        <div className="flex items-center">
          <h3 className="text-lg font-semibold text-gray-700">
            Rating:
          </h3>
          <span className={`ml-2 px-3 py-1 rounded-full text-sm font-bold ${
            rating >= 7 
              ? "bg-green-100 text-green-800" 
              : rating >= 5 
              ? "bg-yellow-100 text-yellow-800" 
              : "bg-red-100 text-red-800"
          }`}>
            {rating}
          </span>
        </div>
        
        <div className="space-y-2">
          <p className="text-gray-700">
            <span className="font-semibold">Summary:</span> {description}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Genre:</span> {genre}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Cast:</span> {cast}
          </p>
        </div>
        
        <div className="pt-4">
          <a href={watch_url} target="_blank" rel="noreferrer">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 text-lg">
              Watch Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};