'use client';

import { useState, useRef, useEffect } from 'react';

const ScrollToTopButton = (props: { scrollableDivRef: React.RefObject<HTMLDivElement>, threshold?: number }) => {
    const [isVisible, setIsVisible] = useState(false);
    const scrollContainerRef = useRef(null)

    useEffect(() => {
        toggleVisibility()
        if (props.scrollableDivRef.current) {
            props.scrollableDivRef.current.addEventListener('scroll', toggleVisibility)
            props.scrollableDivRef.current.addEventListener('resize', toggleVisibility)
            return () => {
                props.scrollableDivRef.current?.removeEventListener('scroll', toggleVisibility)
                props.scrollableDivRef.current?.removeEventListener('resize', toggleVisibility)
            }
        }
    }, [])

    const toggleVisibility = () => {
        const target = props.scrollableDivRef.current
        if (target) {
            const threshold = props.threshold || 10
            
            if (target.scrollTop / (target.scrollHeight - target.clientHeight) >= threshold / 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }
    };

    const scrollToTop = () => {
        if (props.scrollableDivRef.current)
            props.scrollableDivRef.current.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
    };

    return (
        <div>
            {isVisible && (
                <button
                    id='backToTop'
                    ref={scrollContainerRef}
                    onClick={scrollToTop}
                    style={{
                        position: 'fixed',
                        top: '50px',
                        right: '50px',
                        backgroundColor: '#ffffff04',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        padding: '10px 15px',
                        cursor: 'pointer',
                        zIndex: 1000,
                    }}
                >
                    Top
                </button>
            )}
        </div>
    );
};

export default ScrollToTopButton;