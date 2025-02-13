import React from 'react';
import { useTranslation } from 'react-i18next';
import '../css/PortfolioHelpCenter.css'

import HomeContact from '../../components/HomeSections/HomeContact';

import iconSmall from '../../images/portfolio/helpcenter24/helpcenter24_logo.png';

import homeAudioPlayers from '../../images/portfolio/helpcenter24/homeAudioPlayers.jpg';
import homeListVideo from '../../images/portfolio/helpcenter24/homeListVideo.png';
// import messengers from '../../images/portfolio/helpcenter24/Messengers.png';
import spiritualLibrary from '../../images/portfolio/helpcenter24/SpiritualLibrary.png';
import streamingTV from '../../images/portfolio/helpcenter24/StreamingTV.png';
// import youTubePlayer from '../../images/portfolio/helpcenter24/YouTubePlayer.png';
import messengers_youtube from '../../images/portfolio/helpcenter24/YouTubePlayer_Messengers.jpg';
import contacts from '../../images/portfolio/helpcenter24/Contacts.jpg';

const PortfolioHelpCenter24 = () => {
  const { t } = useTranslation();

  return (
    <div className='portfolio-page page-content '>
      <div className='portfolio-helpcenter'>
        <div className='portfolio-banner'>
        <div className='glass- container'>
          <img className='banner-icon' src={iconSmall} alt="Small Icon" />
          <h1 className='banner-title'>{t('pages.portfolio.helpCenter24.title')}</h1>
          <h2 className='banner-subtitle'>{t('pages.portfolio.helpCenter24.subtitle')} <strong>"{t('pages.portfolio.helpCenter24.maintitle')}"</strong></h2>
          <p className='banner-description'>{t('pages.portfolio.helpCenter24.description')}</p>
        </div>
        </div>
        
        
        <section className="project-intro">
        <div className="container">
          <div className="row row-img">
            <div className="col-md-9 table-cell d-md-grid">
        <div>
        <h2  className="section-title">{t('pages.portfolio.helpCenter24.body.holySpiritChurch.overview')}</h2>
        <p>{t('pages.portfolio.helpCenter24.body.holySpiritChurch.introduction1')}</p>
        </div>
            <div className="row row-inner">
        <div className="col-md-6 table-cell">
          <img src={homeListVideo} alt="Home List Video" className="inline-image" />
        </div>
        <div className="col-md-6 table-cell text-intro">
          <p>{t('pages.portfolio.helpCenter24.body.holySpiritChurch.introduction2')}</p>
        </div>
            </div>
            </div>
        
            <div className="table-cell d-block d-md-none">
        <img src={homeAudioPlayers} alt="Home List Video" className="inline-image only-sm-img" />
            </div>
          </div>
          
        </div>
        
          {/* <header class="header">
            <img src={iconSmall} alt="Help Center 24 Logo" class="header-logo" />
            <h1 class="project-title">{t('pages.portfolio.helpCenter24.body.holySpiritChurch.projectTitle').replace("Project:", "")}</h1>
            <p class="project-subtitle">{t('pages.portfolio.helpCenter24.body.holySpiritChurch.overview')}</p>
          </header>
        
          <div class="intro-content">
            <div class="intro-text">
        <p>{t('pages.portfolio.helpCenter24.body.holySpiritChurch.introduction1')}</p>
        <p>{t('pages.portfolio.helpCenter24.body.holySpiritChurch.introduction2')}</p>
            </div>
            <img src={homeListVideo} alt="Home List Video" class="inline-image" />
          </div> */}
        </section>
        
        <section className="features">
        
        <h2 className="section-title">{t('pages.portfolio.helpCenter24.body.holySpiritChurch.keyFeatures')}</h2>
        <div className="features-list">
            <div className='row'>
        <div className=' col-md-6'>
          <div class="feature-item">
            <h3>{t('pages.portfolio.helpCenter24.body.holySpiritChurch.features.serviceSchedule.title')}</h3>
            <p>{t('pages.portfolio.helpCenter24.body.holySpiritChurch.features.serviceSchedule.description')}</p>
          </div>
        
        </div>
        <div className=' col-md-6'>
        <img src={streamingTV} alt="Streaming TV" class="inline-image" />
        </div>
            </div>
        
            <div className='row'>
        <div className=' col-md-5'>
          <img src={spiritualLibrary} alt="Spiritual Library" class="inline-image" />
        </div>
        <div className=' col-md-7'>
          <div class="feature-item">
            <h3>{t('pages.portfolio.helpCenter24.body.holySpiritChurch.features.news.title')}</h3>
            <p>{t('pages.portfolio.helpCenter24.body.holySpiritChurch.features.news.description')}</p>
          </div>
          <div class="feature-item">
            <h3>{t('pages.portfolio.helpCenter24.body.holySpiritChurch.features.library.title')}</h3>
            <p>{t('pages.portfolio.helpCenter24.body.holySpiritChurch.features.library.description')}</p>
          </div>
          <div class="feature-item">
            <h3>{t('pages.portfolio.helpCenter24.body.holySpiritChurch.features.feedback.title')}</h3>
            <p>{t('pages.portfolio.helpCenter24.body.holySpiritChurch.features.feedback.description')}</p>
          </div>
        </div>
            </div>
        
            <div className='row'>
        <div className=' col-md-7'>
        <div class="feature-item">
        <h3>{t('pages.portfolio.helpCenter24.body.holySpiritChurch.features.video.title')}</h3>
        <p>{t('pages.portfolio.helpCenter24.body.holySpiritChurch.features.video.description')}</p>
            </div>
            <div class="feature-item">
        <h3>{t('pages.portfolio.helpCenter24.body.holySpiritChurch.features.radio.title')}</h3>
        <p>{t('pages.portfolio.helpCenter24.body.holySpiritChurch.features.radio.description')}</p>
            </div>
            <div class="feature-item">
        <h3>{t('pages.portfolio.helpCenter24.body.holySpiritChurch.features.messengers.title')}</h3>
        <p>{t('pages.portfolio.helpCenter24.body.holySpiritChurch.features.messengers.description')}</p>
            </div>
        </div>
        <div className=' col-md-5'>
        <img src={messengers_youtube} alt="Messengers and YouTubePlayer" class="inline-image" />
        </div>
            </div>
        
            <div className='row'>
        <div className=' col-md-5'>
          <img src={contacts} alt="Contacts Screen" class="inline-image" />
        </div>
        <div className=' col-md-7'>
        <div class="feature-item">
        <h3>{t('pages.portfolio.helpCenter24.body.holySpiritChurch.features.contacts.title')}</h3>
        <p>{t('pages.portfolio.helpCenter24.body.holySpiritChurch.features.contacts.description')}</p>
            </div>
        </div>
            </div>
        
        </div>
        
         
        </section>
        
        <section class="technologies">
          <h2 class="section-title">{t('pages.portfolio.helpCenter24.body.holySpiritChurch.technologiesTitle')}</h2>
          <div class="technologies-list">
        
            <div className='row'>
        <div className='col'>
          <div class="technology-item">
            <h3>{t('pages.portfolio.helpCenter24.body.holySpiritChurch.technologies.flutter.title')}</h3>
            <p>{t('pages.portfolio.helpCenter24.body.holySpiritChurch.technologies.flutter.description')}</p>
          </div>
        </div>
        <div className='col'>
          <div class="technology-item">
            <h3>{t('pages.portfolio.helpCenter24.body.holySpiritChurch.technologies.firebase.title')}</h3>
            <p>{t('pages.portfolio.helpCenter24.body.holySpiritChurch.technologies.firebase.description')}</p>
          </div>
        </div>
        
            </div>
        
            <div className='row'>
        <div className='col'>
          <div class="technology-item">
            <h3>{t('pages.portfolio.helpCenter24.body.holySpiritChurch.technologies.restApi.title')}</h3>
            <p>{t('pages.portfolio.helpCenter24.body.holySpiritChurch.technologies.restApi.description')}</p>
          </div>
        </div>
        <div className='col'>
          <div class="technology-item">
            <h3>{t('pages.portfolio.helpCenter24.body.holySpiritChurch.technologies.multimedia.title')}</h3>
            <p>{t('pages.portfolio.helpCenter24.body.holySpiritChurch.technologies.multimedia.description')}</p>
          </div>
        </div>
        
            </div>
            
          </div>
        </section>
        
        <section class="business-impact">
          <h2 class="section-title">{t('pages.portfolio.helpCenter24.body.holySpiritChurch.businessImpactTitle')}</h2>
          <p>{t('pages.portfolio.helpCenter24.body.holySpiritChurch.businessImpact')}</p>
        </section>
        
        <section className='end'>
          <div className="container">
            {t('pages.portfolio.TFW')}
          </div>
          
        </section>
      </div>

<HomeContact />


    </div>
  );
};

export default PortfolioHelpCenter24;
