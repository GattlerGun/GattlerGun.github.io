import { cloneElement, useEffect, useState, Children, useRef } from "react";

import leftArrow from './../../images/svg/arrow-slider-left.svg';
import rightArrow from './../../images/svg/arrow-slider-right.svg';

export const Carousel = ({ children }) => {
    const [pages, setPages] = useState([]);
    const [offset, setOffset] = useState(0);
    const [pageWidth, setPageWidth] = useState(0);
    const [leftVisible, setLeftVisible] = useState(true);
    const [rightVisible, setRightVisible] = useState(true);
    const ref = useRef(null);


    useEffect(() => {
        setPages(
            Children.map(children, child => {
                return cloneElement(child, {
                    style: {
                        height: '100%',
                        width: '100%'
                    }
                })
            })
        )

        setLeftVisible(
            () => { return (offset < 0 && pages.length > 1) }
        )
        setRightVisible(
            () => { 
                return (offset > -(pageWidth * (pages.length - 1)) && pages.length > 1)
            }
        )
        setPageWidth(
            (ref.current !== null) ? ref.current.offsetWidth : 1200,
        )
    }, [pageWidth, children, pages.length, offset]);

    const handleLeftArrowClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset + pageWidth;
            return Math.min(newOffset, 0)
        })
    }
    const handleRightArrowClick = () => {

        setOffset((currentOffset) => {
            const newOffset = currentOffset - pageWidth;
            const maxOffset = -(pageWidth * (pages.length - 1));
            return Math.max(newOffset, maxOffset)
        })
    }

    if (pages === undefined || pages.length === 0) {
        return (
            <div className="testimonials__slide">
                <div className="testimonials__slide-content">
                    <h4 className="testimonials__name">As long as it's empty</h4>
                    <p className="testimonials__text">
                    </p>
                </div>
            </div>
        )
    } else {
        return (
            <>
                {leftVisible &&
                    <button className="testimonials__slider-arrow testimonials__slider-left" type="button" onClick={handleLeftArrowClick}>
                        <img className="svg-slider-arrow" src={leftArrow} alt="arrow left" />
                    </button>
                }
                <div className="testimonials__slider">
                    <div ref={ref} className="testimonials__slide-wrapper"
                        style={{
                            transform: `translateX(${offset}px)`
                        }}>
                        {pages}
                    </div>
                </div>
                {rightVisible &&
                    <button className="testimonials__slider-arrow testimonials__slider-right" type="button" onClick={handleRightArrowClick}>
                        <img className="svg-slider-arrow" src={rightArrow} alt="arrow right" />
                    </button>
                }
            </>
        )
    }
}