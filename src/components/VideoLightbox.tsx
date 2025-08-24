import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Video {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  videoUrl: string;
  description: string;
}

interface VideoLightboxProps {
  video: Video;
  onClose: () => void;
}

const VideoLightbox = ({ video, onClose }: VideoLightboxProps) => {
  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="flex items-center justify-center min-h-screen p-4">
        <div 
          className="bg-card rounded-lg shadow-elegant max-w-4xl w-full overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <div>
              <h3 className="text-xl font-semibold">{video.title}</h3>
              <p className="text-muted-foreground text-sm">{video.category}</p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="hover:bg-secondary"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Video */}
          <div className="aspect-video bg-black">
            <video
              className="w-full h-full"
              controls
              autoPlay
              src={video.videoUrl}
              poster={video.thumbnail}
            >
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Description */}
          <div className="p-6">
            <p className="text-muted-foreground">{video.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoLightbox;