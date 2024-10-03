import React from 'react';
import './css/Home.css'

import HomeBanner from '../components/sections/HomeBanner';
import HomeAboutUs from '../components/sections/HomeAboutUs';
import HomeServices from '../components/sections/HomeServices';
import HomeTechnologies from '../components/sections/HomeTechnologies';
import HomePortfolio from '../components/sections/HomePortfolio';
import HomeChooseUs from '../components/sections/HomeChooseUs';
import HomeContact from '../components/sections/HomeContact';


function Home() {

    return (
        <main className='home-page mt-5'>
            <HomeBanner />
            <HomeAboutUs />
            <HomeServices />
            <HomeTechnologies />
            <HomePortfolio />
            <HomeChooseUs />
            <HomeContact />
        </main>
    );
}

export default Home;