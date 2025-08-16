import { awards } from '@/app/data/awards'
import { motion } from 'motion/react'

export function AwardsList() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-x-8 gap-y-2">
        {/* Cột 1 */}
        <div className="space-y-2">
          {awards.column1.map((award) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: award.id * 0.1 }}
              key={award.id}
              className="group flex items-center gap-3 py-2 px-4 rounded-lg bg-gradient-to-br from-white to-gray-50 dark:from-zinc-900 dark:to-zinc-800 hover:from-blue-50 hover:to-white dark:hover:from-blue-900/20 dark:hover:to-zinc-800 transition-all duration-300 shadow-sm hover:shadow-md border border-gray-100 dark:border-gray-800"
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold text-lg shrink-0 group-hover:bg-blue-500/20 transition-colors">
                {award.id}
              </span>
              <h3 className="text-gray-800 dark:text-gray-200 font-medium text-lg leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {award.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Cột 2 */}
        <div className="space-y-2">
          {awards.column2.map((award) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: award.id * 0.1 }}
              key={award.id}
              className="group flex items-center gap-3 py-2 px-4 rounded-lg bg-gradient-to-br from-white to-gray-50 dark:from-zinc-900 dark:to-zinc-800 hover:from-blue-50 hover:to-white dark:hover:from-blue-900/20 dark:hover:to-zinc-800 transition-all duration-300 shadow-sm hover:shadow-md border border-gray-100 dark:border-gray-800"
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold text-lg shrink-0 group-hover:bg-blue-500/20 transition-colors">
                {award.id}
              </span>
              <h3 className="text-gray-800 dark:text-gray-200 font-medium text-lg leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {award.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
