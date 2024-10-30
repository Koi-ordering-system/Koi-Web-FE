import { TravelDetailResponse } from '@/domains/models/travels/travels-detail-response'
import React, { useState } from 'react'
import { Button, Separator } from "@/components/ui";
import { ShoppingCart } from 'lucide-react';
import StarRating from '@/components/rating/star-rating';

export default function TravelFarmDetail({ travel }: { travel: TravelDetailResponse }) {
  const [selectedImage, setSelectedImage] = useState(travel.farmImages[0] || 'https://via.placeholder.com/150');

  const [startIndex, setStartIndex] = useState(0);

  const imagesToShow = 4; // Số lượng hình ảnh hiển thị cùng lúc
  const totalImages = travel.farmImages.length;

  const handleNext = () => {
    if (startIndex + imagesToShow < totalImages) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };


  return (
    <div className='w-full shadow-lg rounded-lg grid grid-cols-5 gap-6 p-6'>
      <div className="col-span-2 flex flex-col items-center">
        {/* Large Image */}
        <img
          src={selectedImage}
          alt={travel.farmName}
          className="w-full h-full object-cover rounded-lg mb-2"
        />

        {/* Thumbnail Images */}
        <div className="flex items-center mt-4">
          {/* Previous Button */}
          <button
            onClick={handlePrevious}
            disabled={startIndex === 0}
            className="p-1 bg-gray-300 rounded-full disabled:opacity-50"
          >
            {"<"}
          </button>

          {/* Thumbnails */}
          <div className="flex">
            {travel.farmImages.slice(startIndex, startIndex + imagesToShow).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${travel.farmName} thumbnail ${index + 1}`}
                onClick={() => setSelectedImage(image)}
                className={`w-16 h-16 object-cover rounded-lg cursor-pointer border-2 ${selectedImage === image ? 'border-orange-500' : 'border-transparent'
                  }`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            disabled={startIndex + imagesToShow >= totalImages}
            className="p-1 bg-gray-300 rounded-full disabled:opacity-50"
          >
            {">"}
          </button>
        </div>
      </div>

      {/* Details Section */}
      <div className="w-full col-span-3">
        {/* Title */}
        <h1 className="text-3xl font-bold text-orange-500">
          {travel.farmName}
        </h1>
        <Separator className="w-[100%] my-4 border text-muted-foreground rounded-sm" />
        {/* Fish Details */}
        <div className="">
          <p>
            <span className="font-bold">Days:</span> {travel.days}
          </p>
          <p>
            <span className="font-bold">Farm Owner:</span> {travel.farmOwner}
          </p>
          <p>
            <span className="font-bold">Address:</span> {travel.farmAddress}
          </p>
          <div className='mb-4'>
            <span className="font-bold">Rating: <StarRating rating={travel.farmRating} /></span>
          </div>
          <p>
            <span className="font-bold">Description:</span> {travel.farmDescription}
          </p>
        </div>
        <Separator className="w-[100%] my-4 border text-muted-foreground rounded-sm" />
        {/* Price */}
        <div className="text-3xl my-4 font-bold text-red-500">{travel.price.toLocaleString('vi-VN')} VND</div>

        {/* Buttons */}
        {/* <div className="flex gap-4">
          <Button>
            <ShoppingCart className="size-5 mr-3" />
            <span className="font-semibold">Add to cart</span>
          </Button>
          <Button>
            <ShoppingCart className="size-5 mr-3" />
            <span className="font-semibold">Buy now</span>
          </Button>
        </div> */}
      </div>
    </div>
  )
}
