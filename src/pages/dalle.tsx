import React from 'react';
import Dalle from '../components/dalle/Dalle';
import ChatSidebarDalle from '@/components/chat/sidebar/ChatSidebarDalle';
import Head from 'next/head';

export default function DallePage() {
    return (<React.Fragment>
        <Head>
            <title>OpenAI</title>
            <meta name="description" content="A clone of OpenAI playground." />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="max-w-screen relative h-screen max-h-screen w-screen overflow-hidden">
            <Dalle />
            <ChatSidebarDalle />
        </div>
    </React.Fragment>);
}

