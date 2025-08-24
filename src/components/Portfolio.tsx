import { useState } from "react";
import { Button } from "@/components/ui/button";
import VideoCard from "./VideoCard";
import VideoLightbox from "./VideoLightbox";

const categories = [
  "All",
  "Short-form videos",
  "Long-form videos",
  "Gaming videos",
  "Football edits",
  "eCommerce ads",
  "Documentary style",
  "Color grading",
  "Anime videos",
  "Ads"
];

// Sample video data - replace with real data
const videos = [
  {
    id: 1,
    title: "Epic Gaming Montage",
    category: "Gaming videos",
    thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=450&fit=crop",
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    description: "High-energy gaming montage with dynamic transitions"
  },
  {
    id: 2,
    title: "Product Launch Campaign",
    category: "eCommerce ads",
    thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=450&fit=crop",
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    description: "Compelling eCommerce ad that drives conversions"
  },
  {
    id: 3,
    title: "Football Highlight Reel",
    category: "Football edits",
    thumbnail: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&h=450&fit=crop",
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    description: "Dynamic football highlights with cinematic editing"
  },
  {
    id: 4,
    title: "Brand Documentary",
    category: "Documentary style",
    thumbnail: "https://images.unsplash.com/photo-1478720568477-b0ba8dcd0806?w=800&h=450&fit=crop",
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    description: "Storytelling through cinematic documentary approach"
  },
  {
    id: 5,
    title: "Anime-Style Promo",
    category: "Anime videos",
    thumbnail: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=450&fit=crop",
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    description: "Anime-inspired promotional video with vibrant colors"
  },
  {
    id: 6,
    title: "Viral TikTok Content",
    category: "Short-form videos",
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=450&fit=crop",
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    description: "Engaging short-form content optimized for social media"
  },
  {
    id: 7,
    title: "Color Grading Showcase",
    category: "Color grading",
    thumbnail: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&h=450&fit=crop",
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    description: "Professional color grading transformation"
  },
  {
    id: 8,
    title: "YouTube Series Episode",
    category: "Long-form videos",
    thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=450&fit=crop",
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    description: "Engaging long-form content for YouTube platform"
  },
  {
    id: 9,
    title: "Commercial Advertisement",
    category: "Ads",
    thumbnail: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=450&fit=crop",
    videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    description: "High-impact commercial advertisement"
  }
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedVideo, setSelectedVideo] = useState(null);

  const filteredVideos = activeCategory === "All" 
    ? videos 
    : videos.filter(video => video.category === activeCategory);

  return (
    <>
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
              Our <span className="bg-gradient-secondary bg-clip-text text-transparent">Portfolio</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our diverse range of video editing projects across multiple categories
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                variant="ghost"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video) => (
              <VideoCard
                key={video.id}
                video={video}
                onClick={() => setSelectedVideo(video)}
              />
            ))}
          </div>

          {filteredVideos.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">No videos found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedVideo && (
        <VideoLightbox
          video={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </>
  );
};

export default Portfolio;