'use client'
import { motion } from 'motion/react'
import { XIcon } from 'lucide-react'
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
import { AwardsList } from '@/components/ui/awards-list'
import { ProjectsSlider } from '@/components/ui/projects-slider'
import { FEATURED_PROJECTS } from './data'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'
import Link from 'next/link'
import Image from 'next/image'
import { AnimatedBackground } from '@/components/ui/animated-background'
import {
  PROJECTS,
  BLOG_POSTS,
} from './data'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

function ProjectMedia({ video, image }: { video?: string; image?: string }) {
  return (
    <MorphingDialog
      transition={{
        type: 'spring',
        bounce: 0,
        duration: 0.3,
      }}
    >
      <MorphingDialogTrigger>
        {video ? (
          <video
            src={video}
            autoPlay
            loop
            muted
            className="aspect-video w-full cursor-zoom-in rounded-xl transition-transform duration-500 group-hover:scale-105"
          />
        ) : image ? (
          <div className="relative overflow-hidden rounded-xl">
            <Image
              src={image}
              alt=""
              width={800}
              height={450}
              className="aspect-video w-full cursor-zoom-in object-cover transition-all duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </div>
        ) : null}
      </MorphingDialogTrigger>
      <MorphingDialogContainer>
        <MorphingDialogContent 
          className="group relative aspect-video rounded-xl overflow-hidden"
          style={{
            background: 'linear-gradient(to right, rgba(255,255,255,0.1), rgba(255,255,255,0.15), rgba(255,255,255,0.1))',
            padding: '1px',
          }}
        >
          <div className="relative rounded-lg overflow-hidden bg-zinc-900">
            {video ? (
              <video
                src={video}
                autoPlay
                loop
                muted
                className="aspect-video h-[60vh] w-full object-cover md:h-[80vh] brightness-110 contrast-110 transition-all duration-300 group-hover:scale-[1.02]"
              />
            ) : image ? (
              <Image
                src={image}
                alt=""
                width={1920}
                height={1080}
                className="aspect-video h-[60vh] w-full object-cover md:h-[80vh] brightness-110 contrast-110 transition-all duration-300 group-hover:scale-[1.02]"
                quality={100}
                priority
              />
            ) : null}
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10 pointer-events-none opacity-50" />
          </div>
          <div className="absolute inset-0 rounded-xl ring-1 ring-white/20 pointer-events-none" />
          <div className="absolute inset-0 backdrop-blur-[1px] pointer-events-none opacity-[0.02]" />
        </MorphingDialogContent>
        <MorphingDialogClose
          className="absolute -top-2 -right-2 h-8 w-8 flex items-center justify-center rounded-full bg-white/90 hover:bg-white shadow-lg hover:shadow-xl dark:bg-zinc-800/90 dark:hover:bg-zinc-800 transform hover:scale-110 transition-all duration-200 group z-50 backdrop-blur-sm"
          variants={{
            initial: { opacity: 0, scale: 0.8 },
            animate: {
              opacity: 1,
              scale: 1,
              transition: { delay: 0.2, duration: 0.2, type: "spring", stiffness: 300 },
            },
            exit: { opacity: 0, scale: 0.8, transition: { duration: 0.15 } },
          }}
        >
          <XIcon className="h-5 w-5 text-zinc-600 dark:text-zinc-300 group-hover:text-zinc-800 dark:group-hover:text-white transition-colors" />
        </MorphingDialogClose>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}

export default function Personal() {
  return (
    <motion.div
      className="w-full space-y-16 sm:space-y-24 py-8 sm:py-12"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="space-y-8"
      >
        <div className="space-y-4">
          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400">
            Nội thất Xuân Hòa Thành lập năm 1980 với đội ngũ nhân sự chất lượng cao kết hợp công nghệ và máy móc hiện đại, quy trình quản trị sản xuất tiên tiến cùng việc hợp tác với các đối tác quốc tế, Xuân Hòa cam kết mang sản phẩm tiêu chuẩn chất lượng quốc tế phục vụ người tiêu dùng Việt.
          </p>
          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400">
            Nội thất Xuân Hòa tự hào là một trong những doanh nghiệp hàng đầu Việt Nam về tư vấn, thiết kế và sản xuất trang thiết bị nội thất. Những huân chương cao quý và giải thưởng uy tín là minh chứng cho nỗ lực của Xuân Hòa trong hoạt động kinh doanh và phục vụ người tiêu dùng.
          </p>
        </div>

        <div className="mt-8">
          <AwardsList />
        </div>

        <div className="mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden bg-gradient-to-b from-zinc-50/50 via-white to-zinc-50/50 dark:from-zinc-900/50 dark:via-zinc-900 dark:to-zinc-900/50 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/50 shadow-lg shadow-zinc-200/20 dark:shadow-zinc-900/20"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/[0.03] to-blue-500/[0.07] dark:from-blue-400/[0.03] dark:to-blue-400/[0.07]" />
            
            <div className="relative px-6 py-8 sm:p-10">
              <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-zinc-100 dark:bg-zinc-800/50 p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-blue-600 dark:text-blue-400">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <line x1="10" y1="9" x2="8" y2="9" />
                  </svg>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-semibold text-zinc-900 dark:text-zinc-50">
                    Catalogue Nội thất Xuân Hòa
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                    Khám phá bộ sưu tập nội thất đa dạng của chúng tôi qua Catalogue mới nhất, với đầy đủ thông số kỹ thuật, hình ảnh chất lượng cao và bảng giá chi tiết.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                  <a
                    href="/Catalogue_noithatxuanhoa.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 group font-medium shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 transition-transform group-hover:-translate-y-0.5">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                    Tải xuống Catalogue
                  </a>
                  <a
                    href="/Catalogue_noithatxuanhoa.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-2.5 border border-zinc-300 dark:border-zinc-700 hover:border-blue-500 dark:hover:border-blue-500 text-zinc-900 dark:text-zinc-100 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-all duration-200 group font-medium"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 transition-transform group-hover:translate-x-0.5">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    Xem trực tuyến
                  </a>
                </div>

                <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 pt-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                  <span>Cập nhật tháng 8/2025 · PDF · 15.2 MB</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="relative"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-12 bg-gradient-to-b from-zinc-50/0 via-zinc-100/30 to-zinc-50/0 dark:from-zinc-900/0 dark:via-zinc-800/20 dark:to-zinc-900/0 -z-10" />
        
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center mb-12"
          >
            <h3 className="text-3xl font-semibold bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 dark:from-zinc-100 dark:via-zinc-300 dark:to-zinc-100 bg-clip-text text-transparent">
              Bộ sưu tập nội thất
            </h3>
            <p className="mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
              Khám phá bộ sưu tập nội thất đa dạng và hiện đại của chúng tôi, được thiết kế để đáp ứng mọi không gian sống và làm việc.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative rounded-2xl bg-gradient-to-br from-zinc-50 to-zinc-100/50 dark:from-zinc-900 dark:to-zinc-800/50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:ring-zinc-800/50 transition-all duration-300 hover:ring-2 hover:ring-blue-500/50 dark:hover:ring-blue-400/50">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-blue-500/0 opacity-0 transition-opacity duration-300 group-hover:from-blue-500/3 group-hover:to-blue-500/10 group-hover:opacity-100" />
                  <ProjectMedia video={project.video} image={project.image} />
                </div>
                <div className="px-1 mt-6 space-y-3">
                  <motion.a
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="inline-block font-medium text-xl text-zinc-900 dark:text-zinc-50 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                    href={project.link}
                    target="_blank"
                  >
                    <span className="flex items-center gap-1">
                      {project.name}
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </span>
                  </motion.a>
                  <p className="text-base text-zinc-600 dark:text-zinc-400 line-clamp-3 transform transition-transform duration-200 group-hover:translate-x-2">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className="relative"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <h3 className="text-3xl font-semibold bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 dark:from-zinc-100 dark:via-zinc-300 dark:to-zinc-100 bg-clip-text text-transparent">
            Dự án nội thất tiêu biểu
          </h3>
          <p className="mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
            Khám phá những dự án nổi bật của Nội thất Xuân Hòa tại các công trình lớn, từ bệnh viện hiện đại đến tòa nhà văn phòng cao cấp.
          </p>
        </motion.div>
        <ProjectsSlider projects={FEATURED_PROJECTS} />
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="text-2xl font-semibold mb-8">Bài viết & Tin tức</h3>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.uid}
              href={post.link}
              className="group relative overflow-hidden rounded-2xl bg-zinc-50 p-6 dark:bg-zinc-900/50 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800/50"
            >
              <div className="space-y-2">
                <h4 className="text-xl font-medium text-zinc-900 dark:text-zinc-50 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                  {post.title}
                </h4>
                <p className="text-zinc-600 dark:text-zinc-400">
                  {post.description}
                </p>
              </div>
              <div className="mt-4 flex items-center text-sm font-medium text-zinc-900 dark:text-zinc-50">
                <span className="group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                  Xem thêm
                </span>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1 h-4 w-4"
                >
                  <path
                    d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </motion.section>


    </motion.div>
  )
}
