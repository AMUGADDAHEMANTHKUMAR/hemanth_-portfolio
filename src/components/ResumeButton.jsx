"use client";
import React, { useState } from 'react';

const ResumeButton = () => {
    const [showModal, setShowModal] = useState(false);

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/AHemanthKumar Resume.pdf';
        link.download = 'AHemanthKumar_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setShowModal(false);
    };

    return (
        <>
            <div
                onClick={() => setShowModal(true)}
                style={{
                    position: 'fixed',
                    bottom: '2rem',
                    left: '2rem',
                    width: '60px',
                    height: '60px',
                    backgroundColor: '#141414',
                    borderRadius: '50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    zIndex: 100,
                    boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                    transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4V20M20 4V20M4 12H20" stroke="#e3e4d8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
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
                        maxWidth: '300px',
                        width: '90%',
                        textAlign: 'center',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
                    }}>
                        <h3 style={{ textTransform: 'uppercase', marginBottom: '1rem', color: '#141414' }}>Download Resume</h3>
                        <p style={{ fontFamily: 'DM Mono', marginBottom: '1.5rem', fontSize: '0.9rem', color: '#444' }}>
                            Do you want to download the resume?
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
                                    textTransform: 'uppercase'
                                }}
                            >
                                Yes
                            </button>
                            <button
                                onClick={() => setShowModal(false)}
                                style={{
                                    padding: '0.5rem 1.5rem',
                                    backgroundColor: 'transparent',
                                    color: '#141414',
                                    border: '1px solid #141414',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                    fontFamily: 'DM Mono',
                                    textTransform: 'uppercase'
                                }}
                            >
                                No
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ResumeButton;
