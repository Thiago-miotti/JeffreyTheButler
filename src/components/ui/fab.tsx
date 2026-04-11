/* eslint-disable jsx-a11y/alt-text */
import { Plus, Camera, Image } from 'lucide-react';

export default function Fab() {
    return (
        <div className="fab">
            <div tabIndex={0} role="button" className="btn btn-lg btn-circle btn-primary">
                <Plus className='text-white' />
            </div>

            <button className="btn btn-lg btn-circle bg-neutral border-none">
                <Camera className='text-base-200' />
            </button>
            <button className="btn btn-lg btn-circle bg-neutral border-none">
                <Image className='text-base-200' />
            </button>

        </div>
    )
}