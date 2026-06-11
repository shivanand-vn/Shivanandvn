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

export default function LogoMarquee() {
  return (
    <div className="relative w-full overflow-hidden py-2">
      {/* Edge gradient masks for beautiful fade-out effect */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 to-transparent dark:from-zinc-950 pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 to-transparent dark:from-zinc-950 pointer-events-none z-10" />

      {/* Scrolling container */}
      <div className="flex w-max items-center animate-marquee hover:[animation-play-state:paused] cursor-pointer">
        {/* First marquee list */}
        <div className="flex items-center gap-16 pr-16">
          {items.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={`first-${idx}`}
                className="flex items-center gap-3.5 select-none text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200 transition-colors"
              >
                <Icon
                  className="h-8 w-8 transition-transform duration-300 hover:scale-110"
                  style={{ color: item.color }}
                />
                <span className="text-xs font-bold uppercase tracking-widest whitespace-nowrap">{item.name}</span>
              </div>
            )
          })}
        </div>

        {/* Second identical marquee list for seamless loop */}
        <div className="flex items-center gap-16 pr-16">
          {items.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={`second-${idx}`}
                className="flex items-center gap-3.5 select-none text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200 transition-colors"
              >
                <Icon
                  className="h-8 w-8 transition-transform duration-300 hover:scale-110"
                  style={{ color: item.color }}
                />
                <span className="text-xs font-bold uppercase tracking-widest whitespace-nowrap">{item.name}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
