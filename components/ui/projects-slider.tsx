import { useState, useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight } from 'lucide-react'

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

export function ProjectsSlider({ projects }: ProjectsCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
    dragFree: true
  }, [Autoplay()])

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return undefined
    
    onSelect()
    emblaApi.on('select', onSelect)
    
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <div className="relative px-4 md:px-8">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
        <button
          onClick={scrollPrev}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/80 shadow-lg hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!prevBtnEnabled}
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {projects.map((project) => (
            <div 
              key={project.title} 
              className="flex-none w-full md:w-1/2 lg:w-1/3 pl-4"
            >
              <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 shadow-md hover:shadow-xl transition-all duration-300">
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
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
        <button
          onClick={scrollNext}
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/80 shadow-lg hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!nextBtnEnabled}
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>
      </div>
    </div>
  )
}
