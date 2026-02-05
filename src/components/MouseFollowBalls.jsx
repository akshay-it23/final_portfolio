import { useEffect, useState } from 'react';

export const MouseFollowBalls = () => {
    const [mousePos, setMousePos] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <>
            {/* First Grid Ball - Blue */}
            <div
                className="fixed pointer-events-none transition-all duration-300 ease-out"
                style={{
                    left: `${mousePos.x}px`,
                    top: `${mousePos.y}px`,
                    transform: 'translate(-50%, -50%)',
                    width: '500px',
                    height: '500px',
                    zIndex: 10,
                }}
            >
                <div
                    className="w-full h-full rounded-full"
                    style={{
                        background: `radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 70%)`,
                        backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.4) 2px, transparent 2px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.4) 2px, transparent 2px)
            `,
                        backgroundSize: '50px 50px',
                        filter: 'blur(1px)',
                    }}
                />
            </div>

            {/* Second Grid Ball - Cyan */}
            <div
                className="fixed pointer-events-none transition-all duration-500 ease-out"
                style={{
                    left: `${mousePos.x * 0.7 + window.innerWidth * 0.15}px`,
                    top: `${mousePos.y * 0.7 + window.innerHeight * 0.15}px`,
                    transform: 'translate(-50%, -50%)',
                    width: '600px',
                    height: '600px',
                    zIndex: 9,
                }}
            >
                <div
                    className="w-full h-full rounded-full"
                    style={{
                        background: `radial-gradient(circle, rgba(34, 211, 238, 0.4) 0%, rgba(34, 211, 238, 0.2) 50%, transparent 70%)`,
                        backgroundImage: `
              linear-gradient(rgba(34, 211, 238, 0.3) 2px, transparent 2px),
              linear-gradient(90deg, rgba(34, 211, 238, 0.3) 2px, transparent 2px)
            `,
                        backgroundSize: '60px 60px',
                        filter: 'blur(1px)',
                    }}
                />
            </div>
        </>
    );
};
