import { Play } from "lucide-react";

interface Video {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  videoUrl: string;
  description: string;
}

interface VideoCardProps {
  video: Video;
  onClick: () => void;
}

const VideoCard = ({ video, onClick }: VideoCardProps) => {
  return (
    <div 
      className="video-card relative cursor-pointer group"
      onClick={onClick}
    >
      {/* Thumbnail */}
      <div className="aspect-video overflow-hidden rounded-lg mb-4 relative">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover transition-smooth group-hover:scale-110"
        />
        
        {/* Play overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center">
          <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
            <Play className="w-8 h-8 text-primary-foreground ml-1" />
          </div>
        </div>

        {/* Category badge */}
        <div className="absolute top-3 left-3 bg-secondary/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
          {video.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-smooth">
          {video.title}
        </h3>
        <p className="text-muted-foreground text-sm">
          {video.description}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;