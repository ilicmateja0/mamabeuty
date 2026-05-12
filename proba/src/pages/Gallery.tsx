import React, { useState, useRef, useEffect } from 'react';

const Gallery = () => {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  const [videoErrors, setVideoErrors] = useState<Record<number, boolean>>({});
  const [loadedVideos, setLoadedVideos] = useState<Record<number, boolean>>({});
  const modalRef = useRef<HTMLDivElement>(null);

  const videos = [
    {
      id: 1,
      title: 'Limfomodelovanje',
      description:
        'Limfomodelovanje - tehnika nagradjivana na internacionalnim takmičenjima, kreirana za dubinsku stimulaciju limfe, redukciju celulita i preoblikovanje tela.',
      path: '/assets/videos/usluga1.mp4',
    },
    {
      id: 2,
      title: 'Tretman vakum aparatom',
      description:
        'Vakum aparat za eliminaciju strija je prava inovacija u našem studiju!',
      path: '/assets/videos/usluga2.mp4',
    },
    {
      id: 3,
      title: 'Tretman EMS aparatom',
      description:
        'Top forma bez vežbanja? Moguće je!',
      path: '/assets/videos/usluga3.mp4',
    },
    {
      id: 4,
      title: 'Laserska epilacija',
      description:
        'Zaboravi na brijanje, iritacije i bolne voskove.',
      path: '/assets/videos/usluga4.mp4',
    },
    {
      id: 5,
      title: 'Presoterapija',
      description:
        'Detoks, relaksacija i obnova u samo 45 minuta!',
      path: '/assets/videos/usluga5.mp4',
    },
  ];

  const handleVideoClick = (id: number) => {
    setActiveVideo(id);
  };

  const handleCloseVideo = () => {
    setActiveVideo(null);
  };

  const handleVideoError = (id: number) => {
    setVideoErrors((prev) => ({
      ...prev,
      [id]: true,
    }));
  };

  const handleVideoLoad = (id: number) => {
    setLoadedVideos((prev) => ({
      ...prev,
      [id]: true,
    }));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        handleCloseVideo();
      }
    };

    if (activeVideo !== null) {
      document.addEventListener(
        'mousedown',
        handleClickOutside
      );
    }

    return () => {
      document.removeEventListener(
        'mousedown',
        handleClickOutside
      );
    };
  }, [activeVideo]);

  useEffect(() => {
    const handleEscapeKey = (
      event: KeyboardEvent
    ) => {
      if (event.key === 'Escape') {
        handleCloseVideo();
      }
    };

    if (activeVideo !== null) {
      document.addEventListener(
        'keydown',
        handleEscapeKey
      );
    }

    return () => {
      document.removeEventListener(
        'keydown',
        handleEscapeKey
      );
    };
  }, [activeVideo]);

  return (
    <div className="bg-gradient-to-b from-yellow-50 to-white py-24 sm:py-32 overflow-hidden">
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="mx-auto max-w-2xl lg:mx-0 animate-fade-up">
          <h2 className="section-title">
            Galerija
          </h2>

          <p className="section-subtitle">
            Pogledajte naše video materijale i
            rezultate tretmana.
          </p>
        </div>

        {/* VIDEO GRID */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          
          {videos.map((video, index) => (
            <div
              key={video.id}
              className="group card hover-card overflow-hidden animate-fade-up"
              style={{
                animationDelay: `${index * 0.12}s`,
              }}
            >
              
              {/* VIDEO */}
              <div
                className="relative w-full cursor-pointer overflow-hidden rounded-t-xl"
                onClick={() =>
                  handleVideoClick(video.id)
                }
              >
                <div className="h-[300px] w-full bg-gray-100 overflow-hidden">
                  
                  {!videoErrors[video.id] ? (
                    <video
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      preload="metadata"
                      muted
                      loop
                      playsInline
                      onMouseEnter={(e) =>
                        e.currentTarget.play()
                      }
                      onMouseLeave={(e) =>
                        e.currentTarget.pause()
                      }
                      onError={() =>
                        handleVideoError(video.id)
                      }
                      onLoadedData={() =>
                        handleVideoLoad(video.id)
                      }
                    >
                      <source
                        src={video.path}
                        type="video/mp4"
                      />
                    </video>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-200">
                      <span className="text-gray-500">
                        Video nije dostupan
                      </span>
                    </div>
                  )}

                  {/* PLAY BUTTON */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-all duration-500">
                    
                    <div className="w-16 h-16 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 shadow-xl">
                      
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 text-yellow-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* TEXT */}
              <div className="p-6 flex flex-col flex-grow">
                
                <h3 className="text-2xl font-bold leading-7 text-yellow-900 mb-4 transition duration-300 group-hover:text-yellow-600">
                  {video.title}
                </h3>

                <p className="text-base leading-7 text-yellow-700">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* VIDEO MODAL */}
      {activeVideo !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in">
          
          <div
            ref={modalRef}
            className="relative w-full max-w-5xl max-h-[90vh] animate-scale-in"
          >
            
            {/* CLOSE BUTTON */}
            <button
              onClick={handleCloseVideo}
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:rotate-90 hover:scale-110 transition-all duration-300 z-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
              
              <div className="p-6 bg-yellow-50 border-b border-yellow-100">
                <h3 className="text-2xl font-bold text-yellow-900">
                  {
                    videos.find(
                      (v) => v.id === activeVideo
                    )?.title
                  }
                </h3>

                <p className="mt-2 text-yellow-700">
                  {
                    videos.find(
                      (v) => v.id === activeVideo
                    )?.description
                  }
                </p>
              </div>

              <div className="overflow-hidden bg-black">
                
                {!videoErrors[activeVideo] ? (
                  <video
                    className="w-full max-h-[70vh] object-contain"
                    controls
                    autoPlay
                    preload="auto"
                    onError={() =>
                      handleVideoError(activeVideo)
                    }
                  >
                    <source
                      src={
                        videos.find(
                          (v) =>
                            v.id === activeVideo
                        )?.path
                      }
                      type="video/mp4"
                    />
                  </video>
                ) : (
                  <div className="w-full h-[400px] flex items-center justify-center bg-gray-200">
                    <span className="text-gray-500">
                      Video nije dostupan
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ANIMATIONS */}
      <style>{`
        .animate-fade-up {
          animation: fadeUp 0.9s ease forwards;
        }

        .animate-fade-in {
          animation: fadeIn 0.4s ease forwards;
        }

        .animate-scale-in {
          animation: scaleIn 0.4s ease forwards;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default Gallery;