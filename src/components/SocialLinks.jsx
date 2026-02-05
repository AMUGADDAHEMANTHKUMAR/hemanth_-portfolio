"use client";
import React, { useState } from 'react';

const SocialLinks = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedPlatform, setSelectedPlatform] = useState(null);

    const handleLinkClick = (platform) => {
        setSelectedPlatform(platform);
        setShowModal(true);
    };

    const handleDownload = () => {
        // Download the resume PDF
        const link = document.createElement('a');
        link.href = '/AHemanthKumar Resume.pdf';
        link.download = 'AHemanthKumar_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setShowModal(false);
        setSelectedPlatform(null);
    };

    const socialData = [
        {
            name: 'LinkedIn',
            url: 'https://linkedin.com',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 21H16.5V14.75C16.5 13.5 15.75 12.5 14.5 12.5C13.25 12.5 12.5 13.5 12.5 14.75V21H9V9H12.5V10.5C13 9.5 14.25 8.75 15.75 8.75C17.75 8.75 20 10 20 13.25V21ZM7 9C5.9 9 5 8.1 5 7C5 5.9 5.9 5 7 5C8.1 5 9 5.9 9 7C9 8.1 8.1 9 7 9ZM5.5 21H8.5V9H5.5V21ZM22.5 0H1.5C0.7 0 0 0.7 0 1.5V22.5C0 23.3 0.7 24 1.5 24H22.5C23.3 24 24 23.3 24 22.5V1.5C24 0.7 23.3 0 22.5 0Z" fill="#141414"/>
                </svg>
            )
        },
        {
            name: 'GitHub',
            url: 'https://github.com',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.544 2.914 1.19.092-.926.35-1.546.636-1.903-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" fill="#141414"/>
                </svg>
            )
        }
    ];

    return (
        <>
            <div style={{
                position: 'fixed',
                bottom: '2rem',
                right: '2rem',
                display: 'flex',
                gap: '1rem',
                zIndex: 99,
                flexDirection: 'column'
            }}>
                {socialData.map((social, index) => (
                    <div
                        key={index}
                        onClick={() => handleLinkClick(social.name)}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            cursor: 'pointer'
                        }}
                    >
                        <div
                            style={{
                                width: '50px',
                                height: '50px',
                                backgroundColor: '#141414',
                                borderRadius: '50%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                cursor: 'pointer',
                                boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                                transition: 'transform 0.3s ease',
                                order: 2
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            {social.icon}
                        </div>
                        <span style={{
                            fontFamily: 'DM Mono, monospace',
                            fontSize: '0.9rem',
                            color: '#141414',
                            textTransform: 'uppercase',
                            fontWeight: 500,
                            whiteSpace: 'nowrap',
                            order: 1
                        }}>
                            {social.name}
                        </span>
                    </div>
                ))}
            </div>

            {showModal && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 1000
                }}>
                    <div style={{
                        backgroundColor: '#e3e4d8',
                        padding: '2rem',
                        borderRadius: '8px',
                        maxWidth: '350px',
                        width: '90%',
                        textAlign: 'center',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
                    }}>
                        <h3 style={{ textTransform: 'uppercase', marginBottom: '1rem', color: '#141414' }}>
                            Access Resume
                        </h3>
                        <p style={{ fontFamily: 'DM Mono', marginBottom: '1.5rem', fontSize: '0.9rem', color: '#444' }}>
                            Click "Yes" to download my resume PDF. This helps me track interest from {selectedPlatform} visitors.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                            <button
                                onClick={handleDownload}
                                style={{
                                    padding: '0.5rem 1.5rem',
                                    backgroundColor: '#141414',
                                    color: '#e3e4d8',
                                    border: 'none',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                    fontFamily: 'DM Mono',
                                    textTransform: 'uppercase',
                                    transition: 'background-color 0.3s ease'
                                }}
                                onMouseEnter={(e) => e.target.style.backgroundColor = '#333'}
                                onMouseLeave={(e) => e.target.style.backgroundColor = '#141414'}
                            >
                                Yes, Download
                            </button>
                            <button
                                onClick={() => {
                                    setShowModal(false);
                                    setSelectedPlatform(null);
                                }}
                                style={{
                                    padding: '0.5rem 1.5rem',
                                    backgroundColor: 'transparent',
                                    color: '#141414',
                                    border: '1px solid #141414',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                    fontFamily: 'DM Mono',
                                    textTransform: 'uppercase',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = '#141414';
                                    e.target.style.color = '#e3e4d8';
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = 'transparent';
                                    e.target.style.color = '#141414';
                                }}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default SocialLinks;
