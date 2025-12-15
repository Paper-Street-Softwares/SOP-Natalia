export default function IconButton(props) {
  const { icon, label, ariaLabel, className } = props

  return (
    <button
      className={`${className} w-10 h-10 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors`}
      aria-label={ariaLabel}
    >
      <div className="flex items-center text-center gap-[10px]">
        <div className="flex flex-col text-colorBlack justify-end">{icon}</div>
      </div>
    </button>
  )
}
