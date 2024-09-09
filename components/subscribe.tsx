"use client";

import { Button } from "./ui/button";

export const Subscribe = () => {

    return(
        <div className="text-center mt-12">
        <h1 className="text-center text-4xl text-gray-600 font-extrabold mb-10">Nagrik Newsletter</h1>
        <a href="https://nagrik-ai-newsletter.beehiiv.com/subscribe" target="_blank" rel="noopener noreferrer">
          <Button variant="premium" className="md:text-lg p-4 md:p-6 rounded-full font-semibold">
            Subscribe to Our Newsletter
          </Button>
          
        </a>
      </div>
      
    );
}

