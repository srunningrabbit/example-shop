import React from 'react';
import Promo from './components/Promo';
import CategoryPreview from './components/CategoryPreview';
import AdsData from '../../data/ads.json';

export default function Home() {
    return (
        <div>
            <Promo adsData={AdsData} />
            <CategoryPreview />
        </div>
    )
}