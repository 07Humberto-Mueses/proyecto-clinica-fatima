import { FaFacebookIcon, InstagramIcon, PageWebIcon } from '../icons/SocialIcons';

export const SocialContainer = () => (
    <div className='flex space-x-4 bg-[#DB978E] items-center justify-center rounded-2xl p-2 w-[170px]'>
        <div className='bg-[#A61C1C] rounded-full p-2'>
            <FaFacebookIcon />
        </div>
        <div className='bg-[#A61C1C] rounded-full p-2'>
            <PageWebIcon />
        </div>
        <div className='bg-[#A61C1C] rounded-full p-2'>
            <InstagramIcon />
        </div>
    </div>
)