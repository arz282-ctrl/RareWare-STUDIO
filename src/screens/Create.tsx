import React, { useEffect, useRef, useState } from 'react';
import { X, Shield, Zap, Type, Filter, Scissors, Camera, FlipHorizontal, Sun, Moon, ArrowLeft, RotateCcw, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../lib/utils';
import { ThemeToggle } from '../components/ThemeToggle';

export default function Create() {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isFrontCamera, setIsFrontCamera] = useState(true);

  const startCamera = async () => {
    try {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
      
      const newStream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: isFrontCamera ? 'user' : 'environment',
          width: { ideal: 1080 },
          height: { ideal: 1920 }
        },
        audio: false
      });
      
      setStream(newStream);
      if (videoRef.current) {
        videoRef.current.srcObject = newStream;
      }
      setError(null);
    } catch (err) {
      console.error("Error accessing camera:", err);
      setError("Camera access denied or not available.");
    }
  };

  useEffect(() => {
    startCamera();
    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [isFrontCamera]);

  const capturePhoto = () => {
    if (videoRef.current) {
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // If front camera, flip the image horizontally to match the preview
        if (isFrontCamera) {
          ctx.translate(canvas.width, 0);
          ctx.scale(-1, 1);
        }
        ctx.drawImage(videoRef.current, 0, 0);
        const dataUrl = canvas.toDataURL('image/jpeg');
        setCapturedImage(dataUrl);
        
        // Stop the stream once captured to save resources
        if (stream) {
          stream.getTracks().forEach(track => track.stop());
          setStream(null);
        }
      }
    }
  };

  const retake = () => {
    setCapturedImage(null);
    startCamera();
  };

  const toggleCamera = () => {
    setIsFrontCamera(!isFrontCamera);
  };

  return (
    <div className="h-screen w-full bg-black overflow-hidden relative">
      {/* Viewfinder / Preview */}
      <div className="absolute inset-0 z-0 bg-neutral-900 flex items-center justify-center">
        {capturedImage ? (
          <motion.img 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            src={capturedImage} 
            alt="Captured" 
            className="w-full h-full object-cover"
          />
        ) : (
          <>
            <video 
              ref={videoRef}
              autoPlay 
              playsInline 
              muted
              className={cn(
                "w-full h-full object-cover",
                isFrontCamera && "scale-x-[-1]"
              )}
            />
            {error && (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <div className="bg-black/60 backdrop-blur-md p-6 rounded-3xl border border-white/10">
                  <Camera className="mx-auto mb-4 text-outline-variant" size={48} />
                  <p className="text-white font-medium mb-4">{error}</p>
                  <button 
                    onClick={startCamera}
                    className="bg-primary text-white px-6 py-2 rounded-full font-bold text-sm"
                  >
                    Try Again
                  </button>
                </div>
              </div>
            )}
          </>
        )}
        
        {/* Safe Space Grid */}
        {!capturedImage && (
          <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 pointer-events-none z-10">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="border-[0.5px] border-white/10"></div>
            ))}
          </div>
        )}
      </div>

      {/* Top Controls */}
      <header className="absolute top-0 w-full z-50 flex justify-between items-center px-6 py-12">
        <button 
          onClick={() => navigate(-1)}
          className="w-10 h-10 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center text-white"
        >
          <ArrowLeft size={24} />
        </button>
        <div className="flex items-center gap-2 px-4 py-2 bg-primary/40 backdrop-blur-md rounded-full border border-white/10">
          <Shield size={16} className="text-white" />
          <span className="text-white text-xs font-bold uppercase tracking-widest">Safe Space Mode</span>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button className="w-10 h-10 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center text-white">
            <Zap size={24} />
          </button>
        </div>
      </header>

      {/* Right Sidebar Tools */}
      {!capturedImage && (
        <div className="absolute right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-6">
          {[
            { icon: FlipHorizontal, label: 'Flip', onClick: toggleCamera },
            { icon: Sun, label: 'Light' },
            { icon: Type, label: 'Text' },
            { icon: Filter, label: 'Filters' },
            { icon: Scissors, label: 'Trim' },
          ].map((tool, i) => (
            <button 
              key={i} 
              onClick={tool.onClick}
              className="flex flex-col items-center gap-1 group"
            >
              <div className="w-12 h-12 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center group-hover:bg-white/10 transition-colors text-white">
                <tool.icon size={24} />
              </div>
              <span className="text-white text-[10px] font-bold uppercase tracking-widest opacity-60">{tool.label}</span>
            </button>
          ))}
        </div>
      )}

      {/* Bottom Controls */}
      <div className="absolute bottom-0 w-full p-12 z-50 flex flex-col items-center gap-12">
        <div className="flex items-center gap-12">
          {capturedImage ? (
            <button 
              onClick={retake}
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white"
            >
              <RotateCcw size={24} />
            </button>
          ) : (
            <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=100&h=100&fit=crop" alt="Gallery" />
            </div>
          )}
          
          <button 
            onClick={capturedImage ? () => navigate('/lounge') : capturePhoto}
            className="relative flex items-center justify-center group"
          >
            <div className="w-24 h-24 rounded-full border-4 border-white/30 group-hover:border-white/50 transition-colors"></div>
            <div className={cn(
              "absolute w-20 h-20 rounded-full flex items-center justify-center group-active:scale-90 transition-all",
              capturedImage ? "bg-primary text-white" : "bg-white"
            )}>
              {capturedImage && <Check size={40} />}
            </div>
          </button>

          <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white">
            <Camera size={24} />
          </button>
        </div>

        <div className="flex gap-8">
          <span className="text-white font-bold uppercase tracking-widest text-xs border-b-2 border-white pb-1">Moment</span>
          <span className="text-white/40 font-bold uppercase tracking-widest text-xs">Reflection</span>
          <span className="text-white/40 font-bold uppercase tracking-widest text-xs">Live</span>
        </div>
      </div>

      {/* Recovery Safe Mode Toggle */}
      <div className="absolute bottom-32 left-8 z-50">
        <div className="flex items-center gap-3 bg-black/40 backdrop-blur-xl p-3 rounded-2xl border border-white/10">
          <div className="w-10 h-6 bg-primary rounded-full relative p-1">
            <div className="w-4 h-4 bg-white rounded-full absolute right-1"></div>
          </div>
          <span className="text-white text-[10px] font-bold uppercase tracking-widest">Recovery Safe Mode</span>
        </div>
      </div>
    </div>
  );
}
