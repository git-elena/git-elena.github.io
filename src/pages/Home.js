import React from 'react';
import './css/Home.css'
import './css/Portfolio.css'

import HomeAboutUs from '../components/HomeSections/HomeAboutUs';
import HomeServices from '../components/HomeSections/HomeServices';
import HomeTechnologies from '../components/HomeSections/HomeTechnologies';
import HomePortfolio from '../components/HomeSections/HomePortfolio';
import HomeChooseUs from '../components/HomeSections/HomeChooseUs';
import HomeContact from '../components/HomeSections/HomeContact';
import HomeBanner from '../components/HomeSections/HomeBanner';


function Home() {

    return (
        <main className='home-page page-content'>
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