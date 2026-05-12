'use client';

import { useState, useEffect } from 'react';

interface ScrollToTopProps {
    scrollableDivRef: React.RefObject<HTMLElement | null>;
    threshold?: number;
}

const ScrollToTopButton = ({ scrollableDivRef, threshold = 10 }: ScrollToTopProps) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const target = scrollableDivRef.current ||
            document.getElementById('scroll-root') ||
            document.documentElement;

        if (!target) return;

        const handleScroll = () => {
            const scrollPos = target === document.documentElement
                ? window.scrollY
                : target.scrollTop;

            setIsVisible(scrollPos > 100);
        };

        const eventTarget = target === document.documentElement ? window : target;

        eventTarget.addEventListener('scroll', handleScroll);
        return () => eventTarget.removeEventListener('scroll', handleScroll);
    }, [scrollableDivRef]);

    const scrollToTop = () => {
        const target = scrollableDivRef.current ||
            document.getElementById('scroll-root');

        if (target) {
            target.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
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
                zIndex: 9999,
                pointerEvents: 'auto',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                color: 'white',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '2px',
                padding: '10px 15px',
                cursor: 'pointer',
                textShadow: '0 0 8px #4d00f2',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                fontSize: '12px',
                letterSpacing: '2px',
                display: isVisible ? 'block' : 'none'
            }}
        >
            ▲ Top
        </button>
    );
};

export default ScrollToTopButton;