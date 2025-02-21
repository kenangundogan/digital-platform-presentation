'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowsPointingOutIcon, MagnifyingGlassIcon, BellIcon } from '@heroicons/react/24/outline'
import { useState } from 'react';
import { toggleFullScreen } from '@/app/utils/fullscreen'

const Header = () => {
    const [isFullScreen, setIsFullScreen] = useState(false);

    const handleFullScreen = () => {
        toggleFullScreen(isFullScreen, setIsFullScreen);
    };

    return (
        <header className="fixed top-0 z-50 w-full min-w-96 overflow-hidden p-4 px-8 h-20 flex justify-between items-center border-b border-gray-950/5 bg-white">

        </header>
    );
};

export default Header;
