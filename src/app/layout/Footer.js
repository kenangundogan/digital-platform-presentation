'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import packageInfo from '../../../package.json';

const Footer = () => {
    const [userAgent, setUserAgent] = useState('');

    useEffect(() => {
        setUserAgent(navigator.userAgent);
    }, []);

    return (
        <footer className="w-full min-w-96 overflow-hidden py-4 px-8 md:w-[calc(100%-256px)] translate-x-0 md:translate-x-64">

        </footer>
    );
};

export default Footer;
