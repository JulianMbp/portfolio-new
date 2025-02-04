'use client'
import YouTubeEmbed from '@/app/mas-sobre-mi/components/YouTubeEmbed';

const Video: React.FC = () => {
return (
    <div className='w-[70%] items-center h-[50%] bg-cyan-200 border-2 border-black rounded-xl shadow-2xl shadow-black '>
        <YouTubeEmbed videoId='Jb0godyqo-s' />
    </div>
);
};

export default Video;