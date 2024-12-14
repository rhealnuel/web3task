import React, {useState} from 'react'
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react"; // Swiper core components
import { Navigation, Pagination } from "swiper/modules"; // Swiper modules
import "swiper/css"; // Swiper default styles
import "swiper/css/navigation";
import "swiper/css/pagination";
import angle from '../assets/angle.png'



const Roadmap = () => {
    const roadmapPhases = [
        {
          title: "Phase 1",
          description: "Foundation & Community Building (Q4 2024 - Q1 2025)",
          items: [
            "Launch official Telegram and Twitter.",
            "Initiate TikTok and social media campaigns.",
            "Conduct a presale event.",
            "Distribute tokens through community airdrops.",
          ],
        },
        {
          title: "Phase 2",
          description: "Token Launch and Initial Utility (Q1 - Q2, 2025)",
          items: [
            "List VIT on Solana-based decentralized exchanges.",
            "Implement the voting mechanism for content and community goals.",
            "Launch the challenges and rewards platform.",
          ],
        },
        {
          title: "Phase 3",
          description: "Expansion and Partnerships (Q2 - Q3, 2025)",
          items: [
            "Partner with influencers and brands to expand reach.",
            "Open an exclusive merchandise store accepting VIT.",
            "Host the first virtual event for token holders.",
          ],
        },
        {
            title: "Phase 4",
            description: "Advanced Features and Charitable Contributions (Q4, 2025)",
            items: [
              "Develop a platform for charitable contributions.",
              "Enable fan voting on charitable initiatives.",
              "Introduce gamified platform features to boost engagement.",
            ],
          },
      ];

      const numb = [0,1,2,3]
    
      const [currentIndex, setCurrentIndex] = useState(1);
    
      const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % roadmapPhases.length);
      };
    
      const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? roadmapPhases.length - 1 : prevIndex - 1
        );
      };
    
      return (
        <div className='flex flex-col items-center w-[100%] relative'>
            <div className='w-[100%] flex flex-col items-center'>
                <p className='text-[32px]  lg:text-[48px] font-[700]'>Our Roadmap</p>
                <p className='text-[#696969] w-[90%] lg:w-[55.90%] text-center text-[12px] lg:text-[20px] '>Mark your calendar and get ready for exciting events, challenges, and opportunities to engage with the Vityah community.</p>

            </div>
            <Swiper
                    style={{ width: "100%", height: "100%", paddingTop: "30px" }} // Ensure Swiper has dimensions
                    spaceBetween={50}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
                    modules={[Navigation, Pagination]}
                    >
                    {roadmapPhases.map((item, index) => (
                        <SwiperSlide key={index} style={{ width: "100%", height: "100%" }}> {/* Slide dimensions */}
                        <div className="w-full h-[354px] flex items-center justify-center">
                            <div
                                className={`w-[90%] lg:w-[71.73%] relative h-[354px] rounded-[32px] flex flex-col gap-4 items-center justify-center`}
                                style={{ backgroundColor: "rgba(24, 24, 24, 1)" }}
                                >
                                <p className="font-[600] text-[24px] lg:text-[32px] text-[#CA1D52]">
                                    {item.title}:
                                </p>
                                <div className='flex flex-col items-center text-center gap-4'>
                                                {
                                                    item.items.map((i) => (
                                                            <p  className='font-[400] text-[12px] lg:text-[16px] opacity-[60%] w-[63vw] lg:w-[100%]'>{i}</p>
                                                    ))
                                                }

                                </div>
                            </div>
                        </div>
                        </SwiperSlide>
                    ))}
            </Swiper>

            {/* <div className='w-[100%] flex items-center justify-center mt-12 flex-col ' >
                {
                    roadmapPhases.map((item, index) => (
                        currentIndex === index &&
                        <motion.div
                        className={`w-[100%] h-[354px] flex items-center justify-center`}                   initial={{ opacity: 0, x: 300 }} // Start off-screen to the right
                        animate={{ opacity: 1, x: 0 }}   // Animate to the center
                        transition={{
                          type: "spring",   // Spring for a natural effect
                          stiffness: 50,    // Controls the spring tightness
                          damping: 10,      // Reduces bouncing
                          duration: 0.5,    // Animation duration
                        }}
                      >
                    <div className={`w-[90%] lg:w-[71.73%] relative h-[354px] rounded-[32px] flex flex-col gap-4 items-center justify-center`} style={{backgroundColor: "rgba(24, 24, 24, 1)"}}>
                        <p className='font-[600] text-[24px] lg:text-[32px] text-[#CA1D52]'>{item.title}:</p>
                        <p className='lg:w-[21.27%] w-[50%] font-[400] text-[8px] lg:text-[12px] opacity-[38%] text-center'>{item.description}</p>
                        <div className='flex flex-col items-center text-center gap-4'>
                        {
                            item.items.map((i) => (
                                    <p  className='font-[400] text-[12px] lg:text-[16px] opacity-[60%] w-[63vw] lg:w-[100%]'>{i}</p>
                            ))
                        }

                        </div>
                        <div className='absolute left-4 bottom-0'>
                            <img src={angle} alt=""  className='w-[88px] lg:w-[140px]'/>
                        </div>
                    </div>
                    </motion.div>

                    ))
                }

                <div className='flex mt-6 gap-5 items-center'>
                    {
                        numb.map((item) => (
                            <div onClick={() => setCurrentIndex(item)} className={`${currentIndex === item ? "lg:h-[16px] h-[8px] lg:w-[16px] w-[8px] cursor-pointer rounded-full bg-[#CA1D52]":"lg:h-[24px] h-[13px] w-[13px] lg:w-[24px] cursor-pointer rounded-full bg-[#CA1D523D]"}  `}></div>
                        ))
                    }
                
                </div>
            </div> */}
        </div>
      );
}

export default Roadmap