import { awards } from '@/app/data/awards'
import { motion } from 'motion/react'

export function AwardsList() {
  const getAwardIcon = (type: string) => {
    switch (type) {
      case 'medal':
        return '🏅'
      case 'certificate':
        return '📋'
      case 'award':
        return '⭐'
      default:
        return '🎖️'
    }
  }

  const allAwards = [...awards.column1, ...awards.column2]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden bg-gradient-to-br from-white to-zinc-50/50 dark:from-zinc-900 dark:to-zinc-800/50 rounded-xl border border-zinc-200/60 dark:border-zinc-700/60 shadow-sm"
    >
      <div className="relative px-6 py-8 sm:p-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-amber-100 to-yellow-200 dark:from-amber-900/40 dark:to-yellow-800/40 mb-5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-amber-600 dark:text-amber-400">
              <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
              <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
              <path d="M4 22h16" />
              <path d="M10 14.66V17c0 .55.47.98.97 1.21C12.04 18.75 13 19.24 14 19.24c1 0 1.96-.49 2.03-1.03C16.53 17.98 17 17.55 17 17v-2.34" />
              <path d="M6 12h12l1.27-3.65A2 2 0 0 0 17.4 6H6.6a2 2 0 0 0-1.87 2.35L6 12Z" />
            </svg>
          </div>
          
          <h3 className="text-2xl sm:text-3xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
            Danh hiệu và Giải Thưởng
          </h3>
          <p className="text-base text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Hơn 40 năm phát triển với những danh hiệu cao quý và giải thưởng uy tín, 
            khẳng định vị thế hàng đầu trong ngành nội thất Việt Nam.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {allAwards.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              className="group relative"
            >
              <div className="relative rounded-lg bg-white/60 dark:bg-zinc-800/40 border border-zinc-200/50 dark:border-zinc-700/50 p-4 transition-all duration-200 hover:bg-white dark:hover:bg-zinc-800/60 hover:border-amber-200 dark:hover:border-amber-700/50 hover:shadow-sm">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/30 dark:to-amber-800/30 text-lg transition-transform duration-200 group-hover:scale-105">
                      {getAwardIcon(award.type)}
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="text-base font-medium text-zinc-800 dark:text-zinc-200 leading-snug transition-colors group-hover:text-amber-700 dark:group-hover:text-amber-300">
                      {award.title}
                    </h4>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-8 pt-6 border-t border-zinc-200/50 dark:border-zinc-700/50"
        >
          <div className="flex items-center justify-center space-x-8 text-sm text-zinc-500 dark:text-zinc-400">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span>Được công nhận</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-amber-500"></div>
              <span>Cập nhật 2025</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
