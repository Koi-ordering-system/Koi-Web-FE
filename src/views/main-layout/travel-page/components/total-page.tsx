import { useState } from 'react'
import jwtDecode from 'jwt-decode';
import { OrderTripBodyRequest } from '@/domains/models/orders/orders-body.request';
import { MinusIcon, PlusIcon } from 'lucide-react';
import { Button, Separator } from '@/components/ui';
import { TravelDetailResponse } from '@/domains/models/travels/travels-detail-response';
import { useToast } from '@/hooks';
import { orderApi } from '@/domains/services/orders/orders.service';

export default function TotalPage({ travel }: { travel: TravelDetailResponse }) {
  const [quantity, setQuantity] = useState<number>(1);
  const [startDate, setStartDate] = useState<Date>(new Date());
  const { toast } = useToast();
  const today = new Date().toISOString().split('T')[0];
  const calculateEndDate = (start: Date, duration: number) => {
    const end = new Date(start);
    end.setDate(end.getDate() + duration);
    return end;
  };
  const [endDate, setEndDate] = useState<Date>(calculateEndDate(startDate, travel.days));

  const handleIncrease = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrease = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : prev)); // Không cho giảm xuống dưới 1
  };

  const handleSubmit = async () => {
    const token = localStorage.getItem('token');
    let decodedToken: any = null;
    if (token) {
      try {
        decodedToken = jwtDecode(token);
        // console.log(decodedToken);
      } catch (error) {
        toast({
          title: 'Can find user',
          description: 'You have to login first!',
        })
      }
    } else {
      toast({
        title: 'Can find user',
        description: 'You have to login first!',
      })
    }

    const order: OrderTripBodyRequest = {
      userId: decodedToken.id,
      tripId: travel.id,
      quantity,
      startDate,
      endDate,     
    };
    console.log(order);
    
    const response = await orderApi.postOrdersTripCreate(order);
    // console.log(response?.data?.payOSUrl);
    if(response?.succeeded && response?.data?.payOSUrl) {
      window.location.href = response?.data?.payOSUrl
    }
  };

  return (
    <div className='w-full h-full shadow-lg rounded-lg p-6'>
      <h1 className="text-3xl font-bold text-orange-500">Book trip</h1>
      <Separator className="w-[100%] my-4 border text-muted-foreground rounded-sm" />

      {/* Chọn số lượng */}
      <div className='flex justify-between'>
        <span>Quantity:</span>
        <div className="flex items-center space-x-2 mb-4">
          <button onClick={handleDecrease} disabled={quantity === 1} className="px-2 py-1 border border-gray-300 text-gray-500 hover:bg-gray-100 disabled:opacity-50">
            <MinusIcon />
          </button>
          <input type="text" value={quantity} readOnly className="w-12 text-center border border-gray-300" />
          <button onClick={handleIncrease} className="px-2 py-1 border border-gray-300 text-gray-500 hover:bg-gray-100">
            <PlusIcon />
          </button>
        </div>
      </div>

      {/* Chọn ngày đi */}
      <div className="mb-4">
        <label className="block mb-1">Depart: </label>
        <input
          type="date"
          min={today}
          value={startDate.toISOString().split('T')[0]} // Chuyển đổi Date thành string cho input
          onChange={(e) => {
            const newStartDate = new Date(e.target.value);
            setStartDate(newStartDate);
            setEndDate(calculateEndDate(newStartDate, travel.days));
          }}
          className="border border-gray-300 rounded p-2 w-full"
        />
      </div>

      {/* Chọn ngày về */}
      <div className="mb-4">
        <label className="block mb-1">Return:</label>
        <input
          type="date"
          disabled
          value={endDate.toISOString().split('T')[0]} // Chuyển đổi Date thành string cho input
          // onChange={(e) => setEndDate(new Date(e.target.value))}
          className="border border-gray-300 rounded p-2 w-full"
        />
      </div>
      <Separator className="w-[100%] my-4 border text-muted-foreground rounded-sm" />

      <div className='space-y-3'>
        <div className="flex justify-between py-1 text-gray-700">
          <span>Total:</span>
          <span className="text-2xl font-bold text-red-500">{(travel.price * quantity).toLocaleString('vi-VN')} VND</span>
        </div>
        <Button onClick={handleSubmit} className='w-full'>
          Payment
        </Button>
      </div>
    </div>
  )
}
