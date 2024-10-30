import { Loading } from '@/components/common';
import { useTravelDetail } from '@/domains/stores/hooks/travels/use-travel-detail';
import React from 'react'
import { useParams } from 'react-router-dom';
import TravelBreadcumb from './components/travel-breadcumb';
import TotalPage from './components/total-page';
import FormOrderTrip from './components/form-order-trip';
import TravelFarmDetail from './components/travel-farm-detail';

export default function travelDetail() {
    const { id } = useParams<string>();

    if (!id) {
        return <div>Invalid ID</div>;
    }

    const { data, isLoading, error } = useTravelDetail({ id });

    if (isLoading) {
        return <Loading />;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        (data && (
            <div className='container w-full mx-auto p-10'>
                <TravelBreadcumb travelName={data?.data?.farmName} />
                <div className='w-full grid grid-cols-3 gap-8 mt-10'>
                    <div className='col-span-2'>
                        <TravelFarmDetail travel={data.data!} />
                    </div>
                    <div className='col-span-1'>
                        <TotalPage />
                    </div>
                    <div className='col-span-2'>
                        <FormOrderTrip />
                    </div>
                </div>
            </div>
        ))
    )
}
