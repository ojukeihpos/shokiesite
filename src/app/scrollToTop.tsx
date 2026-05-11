'use client';

import { useState, useEffect } from 'react';

interface ScrollToTopProps {
    scrollableDivRef: React.RefObject<HTMLElement | null>;
    threshold?: number;
}

const ScrollToTopButton = ({ scrollableDivRef, threshold = 10 }: ScrollToTopProps) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
    const target = scrollableDivRef.current;
    if (target) {
        if (target.scrollTop > 20) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }
};

    useEffect(() => {
        const target = scrollableDivRef.current;

        if (!target) {
            const timeout = setTimeout(toggleVisibility, 100);
            return () => clearTimeout(timeout);
        }

        toggleVisibility();

        target.addEventListener('scroll', toggleVisibility);
        window.addEventListener('resize', toggleVisibility);

        return () => {
            target.removeEventListener('scroll', toggleVisibility);
            window.removeEventListener('resize', toggleVisibility);
        };
    }, [scrollableDivRef.current]);

    const scrollToTop = () => {
        if (scrollableDivRef.current) {
            scrollableDivRef.current.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }
    };

    return (
        <button
            id='backToTop'
            onClick={scrollToTop}
            className="clickable"
            style={{
                position: 'fixed',
                bottom: '40px',
                right: '40px',
                zIndex: 9999, // Crank this up
                pointerEvents: 'auto', // Force it to accept clicks
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                color: 'white',
                border: '1px solid rgba(255, 255, 255, 0.2)', /* Added a subtle border */
                borderRadius: '2px', /* Sharper corners for mecha look */
                padding: '10px 15px',
                cursor: 'pointer',
                textShadow: '0 0 8px #4d00f2', /* Changed glow to blue/purple to contrast the red Back button */
                fontWeight: 'bold',
                textTransform: 'uppercase',
                fontSize: '12px',
                letterSpacing: '2px'
            }}
        >
            ▲ Top
        </button>
    );
};

export default ScrollToTopButton;