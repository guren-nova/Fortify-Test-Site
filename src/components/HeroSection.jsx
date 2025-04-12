import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-[#0f0f11] text-white flex items-center justify-center px-6">
      <div className="max-w-3xl text-center space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold"
        >
          あなたのDiscordを守る、<br />
          静かなる防衛者。
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-300"
        >
          Fortifyは、あなたのDiscordサーバーを荒らしから守る、信頼性の高い自動対策Botです。
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <a href="#" className="bg-violet-600 hover:bg-violet-700 text-white text-lg px-6 py-4 rounded-2xl shadow-lg">
            Botを導入する
          </a>
          <a href="#" className="border border-gray-600 text-gray-300 text-lg px-6 py-4 rounded-2xl">
            ドキュメントを見る
          </a>
        </motion.div>
      </div>
    </div>
  )
}
