import {
  SiPython,
  SiC,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiHtml5,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiVercel,
  SiRender,
  SiCloudflare,
  SiCloudinary,
  SiBrevo,
} from 'react-icons/si'

const items = [
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'C', icon: SiC, color: '#A8B9CC' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'Express', icon: SiExpress, color: '#888888' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
  { name: 'Vercel', icon: SiVercel, color: '#000000' },
  { name: 'Render', icon: SiRender, color: '#46E3B7' },
  { name: 'Cloudflare', icon: SiCloudflare, color: '#F38020' },
  { name: 'Cloudinary', icon: SiCloudinary, color: '#3448C5' },
  { name: 'Brevo', icon: SiBrevo, color: '#008060' },
]

// Seeded/pre-shuffled configurations to prevent hydration mismatches
const row1Items = [
  items[3], // TypeScript
  items[0], // Python
  items[14], // Cloudflare
  items[4], // React
  items[9], // MySQL
  items[8], // Express
  items[5], // HTML5
  items[10], // MongoDB
  items[15], // Cloudinary
  items[1], // C
  items[6], // Tailwind CSS
  items[11], // Firebase
  items[7], // Node.js
  items[2], // JavaScript
  items[12], // Vercel
  items[13], // Render
  items[16], // Brevo
]

const row2Items = [
  items[4], // React
  items[10], // MongoDB
  items[1], // C
  items[12], // Vercel
  items[2], // JavaScript
  items[14], // Cloudflare
  items[0], // Python
  items[8], // Express
  items[3], // TypeScript
  items[16], // Brevo
  items[13], // Render
  items[9], // MySQL
  items[5], // HTML5
  items[6], // Tailwind CSS
  items[15], // Cloudinary
  items[7], // Node.js
  items[11], // Firebase
]

const row3Items = [
  items[6], // Tailwind CSS
  items[7], // Node.js
  items[11], // Firebase
  items[15], // Cloudinary
  items[13], // Render
  items[16], // Brevo
  items[5], // HTML5
  items[9], // MySQL
  items[8], // Express
  items[0], // Python
  items[2], // JavaScript
  items[1], // C
  items[3], // TypeScript
  items[4], // React
  items[10], // MongoDB
  items[14], // Cloudflare
  items[12], // Vercel
]

export default function LogoMarquee() {
  return (
    <div className="relative w-full overflow-hidden py-4 flex flex-col gap-4">
      {/* Edge gradient masks for beautiful fade-out effect */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 to-transparent dark:from-zinc-950 pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 to-transparent dark:from-zinc-950 pointer-events-none z-10" />

      {/* Row 1: Left to Right */}
      <div className="flex w-max items-center animate-marquee-reverse hover:[animation-play-state:paused] cursor-pointer" style={{ animationDuration: '38s' }}>
        <div className="flex items-center gap-16 pr-16">
          {row1Items.map((item, idx) => {
            const Icon = item.icon
            return (
              <div key={`r1-1-${idx}`} className="flex items-center gap-3.5 select-none text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200 transition-colors">
                <Icon className="h-8 w-8 transition-transform duration-300 hover:scale-110" style={{ color: item.color }} />
                <span className="text-xs font-bold uppercase tracking-widest whitespace-nowrap">{item.name}</span>
              </div>
            )
          })}
        </div>
        <div className="flex items-center gap-16 pr-16">
          {row1Items.map((item, idx) => {
            const Icon = item.icon
            return (
              <div key={`r1-2-${idx}`} className="flex items-center gap-3.5 select-none text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200 transition-colors">
                <Icon className="h-8 w-8 transition-transform duration-300 hover:scale-110" style={{ color: item.color }} />
                <span className="text-xs font-bold uppercase tracking-widest whitespace-nowrap">{item.name}</span>
              </div>
            )
          })}
        </div>
      </div>

      {/* Row 2: Right to Left */}
      <div className="flex w-max items-center animate-marquee hover:[animation-play-state:paused] cursor-pointer" style={{ animationDuration: '34s' }}>
        <div className="flex items-center gap-16 pr-16">
          {row2Items.map((item, idx) => {
            const Icon = item.icon
            return (
              <div key={`r2-1-${idx}`} className="flex items-center gap-3.5 select-none text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200 transition-colors">
                <Icon className="h-8 w-8 transition-transform duration-300 hover:scale-110" style={{ color: item.color }} />
                <span className="text-xs font-bold uppercase tracking-widest whitespace-nowrap">{item.name}</span>
              </div>
            )
          })}
        </div>
        <div className="flex items-center gap-16 pr-16">
          {row2Items.map((item, idx) => {
            const Icon = item.icon
            return (
              <div key={`r2-2-${idx}`} className="flex items-center gap-3.5 select-none text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200 transition-colors">
                <Icon className="h-8 w-8 transition-transform duration-300 hover:scale-110" style={{ color: item.color }} />
                <span className="text-xs font-bold uppercase tracking-widest whitespace-nowrap">{item.name}</span>
              </div>
            )
          })}
        </div>
      </div>

      {/* Row 3: Left to Right */}
      <div className="flex w-max items-center animate-marquee-reverse hover:[animation-play-state:paused] cursor-pointer" style={{ animationDuration: '42s' }}>
        <div className="flex items-center gap-16 pr-16">
          {row3Items.map((item, idx) => {
            const Icon = item.icon
            return (
              <div key={`r3-1-${idx}`} className="flex items-center gap-3.5 select-none text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200 transition-colors">
                <Icon className="h-8 w-8 transition-transform duration-300 hover:scale-110" style={{ color: item.color }} />
                <span className="text-xs font-bold uppercase tracking-widest whitespace-nowrap">{item.name}</span>
              </div>
            )
          })}
        </div>
        <div className="flex items-center gap-16 pr-16">
          {row3Items.map((item, idx) => {
            const Icon = item.icon
            return (
              <div key={`r3-2-${idx}`} className="flex items-center gap-3.5 select-none text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200 transition-colors">
                <Icon className="h-8 w-8 transition-transform duration-300 hover:scale-110" style={{ color: item.color }} />
                <span className="text-xs font-bold uppercase tracking-widest whitespace-nowrap">{item.name}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
