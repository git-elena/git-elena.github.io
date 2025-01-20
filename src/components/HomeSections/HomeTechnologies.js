import React from 'react'
import Technologie from '../Technologie'
import { ReactComponent as ReactIcon } from '../../images/home/logos/logo-react.svg';
import { ReactComponent as AndroidStudioIcon } from '../../images/home/logos/logo-android-studio.svg';
import { ReactComponent as FigmaIcon } from '../../images/home/logos/logo-figma.svg';
import { ReactComponent as FlutterIcon } from '../../images/home/logos/logo-flutter.svg';
import { ReactComponent as JavaIcon } from '../../images/home/logos/logo-java.svg';
import { ReactComponent as JsIcon } from '../../images/home/logos/logo-js.svg';
import { ReactComponent as ModxIcon } from '../../images/home/logos/logo-modx.svg';
import { ReactComponent as FirebaseIcon } from '../../images/home/logos/logo-firebase.svg';
import { ReactComponent as Typo3Icon } from '../../images/home/logos/logo-typo3.svg';
import { ReactComponent as KotlinIcon } from '../../images/home/logos/logo-kotlin.svg';
import { ReactComponent as XcodeIcon } from '../../images/home/logos/logo-xcode.svg';
import { ReactComponent as SwiftIcon } from '../../images/home/logos/logo-swift.svg';
import { useTranslation } from 'react-i18next';

const HomeTechnologies = () => {
    const { t } = useTranslation();
  return (
    <section className='section technologies py-5 bg-light '>
                <div className="container">
                    <h2 className='mb-4 text-center'><span className="text-primary-emphasis">{t('home.technologies.title.left')}</span>{t('home.technologies.title.right')}</h2>
                    <div className="row d-flex align-items-center text-center ">
                        <div className='col-lg-1 col-md-3 col-sm-4 col-4' ><Technologie IconComponent={ReactIcon} title="React" /></div>
                        <div className='col-lg-1 col-md-3 col-sm-4 col-4' ><Technologie IconComponent={FlutterIcon} title="Flutter" /></div>
                        <div className='col-lg-1 col-md-3 col-sm-4 col-4' ><Technologie IconComponent={XcodeIcon} title="Xcode" /></div>
                        <div className='col-lg-1 col-md-3 col-sm-4 col-4' ><Technologie IconComponent={AndroidStudioIcon} title="Android Studio" /></div>
                        <div className='col-lg-1 col-md-3 col-sm-4 col-4' ><Technologie IconComponent={Typo3Icon} title="YPO3" /></div>
                        <div className='col-lg-1 col-md-3 col-sm-4 col-4' ><Technologie IconComponent={ModxIcon} title="ModX" /></div>
                        <div className='col-lg-1 col-md-3 col-sm-4 col-4' ><Technologie IconComponent={SwiftIcon} title="Swift" /></div>
                        <div className='col-lg-1 col-md-3 col-sm-4 col-4' ><Technologie IconComponent={KotlinIcon} title="Kotlin" /></div>
                        <div className='col-lg-1 col-md-3 col-sm-4 col-4' ><Technologie IconComponent={JavaIcon} title="Java" /></div>
                        <div className='col-lg-1 col-md-3 col-sm-4 col-4' ><Technologie IconComponent={JsIcon} title="JavaScript" /></div>
                        <div className='col-lg-1 col-md-3 col-sm-4 col-4' ><Technologie IconComponent={FirebaseIcon} title="Firebase" /></div>
                        <div className='col-lg-1 col-md-3 col-sm-4 col-4' ><Technologie IconComponent={FigmaIcon} title="Figma" /></div>

                    </div>
                </div>
            </section>
  )
}

export default HomeTechnologies
