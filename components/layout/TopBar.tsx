import { Facebook, Instagram, Twitter, Youtube, MapPin, Clock, Phone } from 'lucide-react';

export default function TopBar() {
    return (
        <div className="bg-gradient-to-r from-primary to-accent text-white py-2 text-xs hidden md:block">
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                {/* Socials */}
                <div className="flex items-center gap-4">
                    <a href="https://www.instagram.com/samosahubofficial/?igshid=19t1brg2rj6gk" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors"><Instagram className="w-4 h-4" /></a>
                    <a href="https://www.facebook.com/samosahubofficial/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors"><Facebook className="w-4 h-4" /></a>
                    <a href="https://twitter.com/SamosaHub?s=08" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors"><Twitter className="w-4 h-4" /></a>
                    <a href="https://www.youtube.com/watch?v=nvt3xtVsvXk" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors"><Youtube className="w-4 h-4" /></a>
                </div>

                {/* Info */}
                <div className="flex items-center gap-6 font-medium">
                    <div className="flex items-center gap-2">
                        <MapPin className="w-3 h-3" />
                        <span>Krishna Nagar, Delhi</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="w-3 h-3" />
                        <span>01:00 PM - 10:00 PM</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Phone className="w-3 h-3" />
                        <a href="tel:+917827331394" className="hover:underline">+91 78273 31394</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
