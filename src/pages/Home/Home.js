import React from 'react';
import Promo from './components/Promo';
import CategoryPreview from './components/CategoryPreview';
import ClearStorage from '../../components/ClearStorage';
import AdsData from '../../data/ads.json';

export default function Home() {
    return (
        <div>
            <Promo adsData={AdsData} />
            <CategoryPreview />
            <ClearStorage />
        </div>
    )
}