import { useState, useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from 'motion/react'

interface Project {
  title: string
  address: string
  description: string
  image: string
  year: string
}

interface ProjectsCarouselProps {
  projects: Project[]
}

export function ProjectsCarousel({ projects }: ProjectsCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: 'center',
      loop: true,
      dragFree: false,
      containScroll: 'keepSnaps',
      slidesToScroll: 1,
      watchSlides: true
    },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  )

  const [scrollProgress, setScrollProgress] = useState(0)

  const onScroll = useCallback((emblaApi: any) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()))
    setScrollProgress(progress * 100)
  }, [])

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
    onScroll(emblaApi)
  }, [emblaApi, onScroll])

  useEffect(() => {
    if (!emblaApi) return
    
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('scroll', () => onScroll(emblaApi))

    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('scroll', () => onScroll(emblaApi))
    }
  }, [emblaApi, onSelect, onScroll])

  const CarouselButton = ({ 
    onClick, 
    enabled, 
    icon: Icon 
  }: { 
    onClick: () => void
    enabled: boolean
    icon: typeof ChevronLeft | typeof ChevronRight 
  }) => (
    <button
      className={`absolute top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/80 shadow-lg transition-all duration-200 ${
        enabled ? 'opacity-100 hover:bg-white' : 'opacity-50 cursor-not-allowed'
      }`}
      onClick={onClick}
      disabled={!enabled}
    >
      <Icon className="w-6 h-6 text-gray-800" />
    </button>
  )

  return (
    <div className="relative">
      {/* Prev Button */}
      <CarouselButton
        onClick={scrollPrev}
        enabled={prevBtnEnabled}
        icon={ChevronLeft}
      />

      <div className="overflow-hidden rounded-xl" ref={emblaRef}>
        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 z-10 h-1 bg-gray-200 dark:bg-gray-800">
          <div
            className="h-full bg-blue-600 dark:bg-blue-400 transition-all duration-200 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        <div className="flex gap-6">
          {projects.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={project.title}
              className="flex-[0_0_90%] md:flex-[0_0_45%] lg:flex-[0_0_30%] group relative overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h4>
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded">
                    {project.year}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {project.address}
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Next Button */}
      <CarouselButton
        onClick={scrollNext}
        enabled={nextBtnEnabled}
        icon={ChevronRight}
      />
    </div>
  )
}
