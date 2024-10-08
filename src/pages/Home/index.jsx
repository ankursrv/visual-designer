import { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';     // Swiper Slider
import { Autoplay } from 'swiper/modules';              // Swiper Autoplay
import 'swiper/css';                                    // Swiper CSS

import HeroTitle from '../../components/HeroTitle';     // Banner Title Component
import StarRating from '../../components/StarRating';   // Star Rating Component

import {heroSlider,brandImage, designCard, latestWrok, testiCard} from '../../components/Data';

const Home = () => {
    const [showModal, setShowModal] = useState(false);  // Latest Work section Modal

    return (
        <div>
            {/* //    HeroBAnner start */}
            <Swiper
                centeredSlides={true}
                loop={true}
                // autoplay={{
                //     delay: 3500,
                //     disableOnInteraction: false,
                // }}
                modules={[Autoplay]}
                className=" max-w-[1280px] font-epilogue"
            >
                {
                    heroSlider.map((heroContent, index) => (
                        <SwiperSlide key={index}>
                            <div class="md:columns-2 flex flex-col md:flex-row text-black justify-between px-6 lg:px-0 mt-[42px]">
                                <HeroTitle
                                    title={heroContent.title}
                                    heading={heroContent.heading}
                                    paragraph={heroContent.paragraph}
                                    image={heroContent.image}
                                />
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            {/* // HeroBanner END */}

            {/* Brand Section start  */}
            <Swiper
                slidesPerView={1}
                spaceBetween={50}
                autoplay={{
                    delay: 2500,
                }}
                loop={true}
                modules={[Autoplay]}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        // spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                    },
                    1024: {
                        slidesPerView: 5,
                    },
                }}

                className='mySwiper max-w-[1280px] bg-redLight h-[130px] px-6 lg:px-0 mt-[42px]'>
                {
                    brandImage.map((imageItem, index) => (
                        <SwiperSlide key={index} className="!flex items-center justify-center">
                            <img src={`./images/${imageItem.imageBrand}`} alt={imageItem.altText} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            {/* Brand Section End  */}

            {/* Design Section start  */}
            <section class="grid md:grid-flow-col md:auto-cols-fr max-w-[1280px] mx-auto px-6 lg:px-0 my-[108px]">
                {
                    designCard.map((cardItem, index) => (
                        <div key={index} className='max-w-[394px] flex flex-col gap-[42px] items-center justify-center text-center text-black'>
                            <img src={`./images/${cardItem.designImage}`} alt="design images" className='w-[124px] h-[124px] object-cover' />
                            <div>
                                <h4 className='text-[27px] font-semibold'>{cardItem.designTitle}</h4>
                                <p className='text-[17px] font-normal leading-7 mt-3 px-12'>{cardItem.designDiscription}</p>
                            </div>
                        </div>
                    ))
                }
            </section>
            {/* Design Section ENd  */}

            {/* Latest Work Section start  */}
            <section class=" max-w-[1280px] mx-auto px-6 lg:px-6">
                <h2 className='text-[32px] font-semibold text-center my-[42px]'>Latest work</h2>
                <div className='grid md:grid-cols-3  gap-6 mb-[42px]'>
                    {
                        latestWrok.map((wrokItem, index) => (
                            <div key={index} className='text-black cursor-pointer' onClick={() => setShowModal(true)}>
                                <img src={`./images/${wrokItem.workImage}`} alt="design images" className='w-[395px] h-[330px] object-cover' />
                                <div>
                                    <h4 className='text-xl font-semibold mt-6'>{wrokItem.workTitle}</h4>
                                    <p className='text-[17px] font-normal mt-2'>{wrokItem.workDepartment}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                {/* Image MOdal start  */}
                {showModal ? (
                    <>
                        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none p-5">
                                    <div className="flex items-start justify-between">
                                        <button className=" absolute text-black text-3xl -right-4 -top-6 bg-white w-10 h-10 rounded-full flex items-center justify-center leading-none" onClick={() => setShowModal(false)}>
                                            ×
                                        </button>
                                    </div>
                                    <div className=''>
                                        <figure className='w-[520px]' >
                                            <img src="./images/workimg1.webp" alt="" className='w-full object-cover' />
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null}
                {/* Image MOdal END   */}
            </section>
            {/* Latest Work Section END  */}

            {/* Testimonial Section start  */}
            <section class=" max-w-[1280px] mx-auto px-6 lg:px-6 mt-[84px] mb-[42px]" id='testimonial'>
                <h2 className='text-[32px] font-semibold text-center my-[42px]'>Testimonial</h2>
                <div className='grid md:grid-cols-3 gap-6'>
                    {
                        testiCard.map((testiItem, index) => (
                            <div key={index} className='text-black bg-grayLight p-[42px] w-[395px] h-[330px] gap-[68px] flex flex-col'>
                                <p className='font-semibold text-xl leading-[30px]'>{testiItem.testiDiscription}</p>
                                <div className='flex gap-4'>
                                    <figure>
                                        <img src={`./images/${testiItem.textiImage}`} alt="testimonial images" className='w-[50px] h-[50px] object-cover' />
                                    </figure>
                                    <div>
                                    <StarRating totalStars = {5} />
                                        {/* <h6 className='flex gap-[6px]'>
                                            {
                                                testiItem.testiRating.map((starIcon, index) => (
                                                    <img key={index} src={`./images/${starIcon}`} alt='star image' />
                                                ))
                                            }
                                        </h6> */}
                                        <h4 className='text-xl font-semibold mt-2'>{testiItem.testiName}</h4>
                                        <p className='text-[17px] font-normal'>{testiItem.testiBrand}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    
                </div>
            </section>
            {/* Testimonial Section END  */}
        </div>
    )
}
export default Home

