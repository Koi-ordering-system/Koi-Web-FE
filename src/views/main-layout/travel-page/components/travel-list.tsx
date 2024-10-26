

export default function TravelList() {
  return (
    <div className="flex bg-white p-4 rounded-lg shadow-md mb-6 max-w-4xl">
      {/* Hình ảnh */}
      <img
        src="https://via.placeholder.com/150"
        alt="Place"
        className="rounded-md w-32 h-32 object-cover"
      />

      {/* Nội dung */}
      <div className="ml-4 flex-grow">
        {/* Tiêu đề */}
        <h2 className="text-orange-600 text-lg font-bold mb-1">Matsue Nishikigoi Center</h2>

        {/* Thông tin chi tiết */}
        <div className="text-gray-600 text-sm mb-4">
          <div className="flex">
            <div className="mr-8">
              <p className="font-bold text-black">12:00 pm - 01:28 pm</p>
              <p className="text-gray-500">Tan Son Nhat Airport</p>
            </div>
            <div>
              <p className="font-bold text-black">12:00 pm - 01:28 pm</p>
              <p className="text-gray-500">Tan Son Nhat Airport</p>
            </div>
          </div>
          <div className="border-t border-gray-300 my-2"></div>
          <div className="flex mt-2">
            <div className="mr-8">
              <p className="text-gray-500">Depart</p>
              <p className="font-bold text-black">2h 28m</p>
              <p className="text-gray-500">EWR-BNA</p>
            </div>
            <div>
              <p className="text-gray-500">Return</p>
              <p className="font-bold text-black">2h 28m</p>
              <p className="text-gray-500">EWR-BNA</p>
            </div>
          </div>
        </div>
      </div>

      {/* Giá và nút */}
      <div className="flex flex-col items-end justify-between">
        <p className="text-pink-500 text-lg font-bold">starting from</p>
        <p className="text-pink-600 text-2xl font-bold">2.000.000 VND</p>
        <button className="bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-500 mt-4">
          View Deals
        </button>
      </div>
    </div>
  )
}
