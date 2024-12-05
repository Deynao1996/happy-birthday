export const TransitionBlocks = ({ count = 10 }) => {
  return (
    <div className="z-[100] h-full-screen flex flex-col justify-between pointer-events-none fixed inset-0">
      {[...new Array(count)].map((_, index) => (
        <div
          className="bg-border flex-1 w-0 transition-block"
          key={index}
        ></div>
      ))}
    </div>
  )
}
