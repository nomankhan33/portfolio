import React, { useEffect, useState } from "react";
import { projectData } from "./Data";
import { projectNav } from "./Data";
import WorksItem from "./WorksItem";
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Works = () => {
    const [item, setItem] = useState({ name: 'All' });
    const [project, setProject] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        if (item.name === 'All') {
            setProject(projectData);
        }
        else {
            const newProject = projectData.filter((project) => {
                return project.category === item.name;
            });
            setProject(newProject);
        }
    }, [item]);

    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent });
        setActive(index);
    }

    return (
        <div>
            <div className="work__filters">
                {projectNav.map((item, index) => {
                    return (
                        <span onClick={(e) => {
                            handleClick(e, index);
                        }}
                            className={`${active === index ? 'active-work' : ''} work__item`}
                            key={index}>{item.name}</span>
                    );
                })}
            </div>
            <Swiper
                modules={[Pagination]}
                spaceBetween={24}
                loop={true}
                grabCursor={true}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                    576: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 48,
                    },
                }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className="work__container container grid">
                {project.map(item => {
                    return (
                        <SwiperSlide>
                            <WorksItem item={item} key={item.id} />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    );
};

export default Works;