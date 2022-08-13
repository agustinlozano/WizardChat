import { twMerge } from "tailwind-merge";

const Spinener = ({ className }: { className?: string }) => {
  return (
    <div
      className={twMerge(
        className,
        'animate-spin border-4 border-black/20 w-4 h-4 rounded-full border-l-inherit inline-block'
      )}
    />
  )
}

export default Spinener;