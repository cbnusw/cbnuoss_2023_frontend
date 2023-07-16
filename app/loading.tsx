export default function Loading() {
  return (
    <div className="w-10 h-10 mx-auto flex justify-center items-center text-3xl font-thin animate-spin">
      <svg
        viewBox="0 0 32 32"
        className="w-6 h-6 flex justify-center items-center text-3xl font-thin animate-spin"
      >
        <circle
          cx="16"
          cy="16"
          fill="none"
          r="14"
          strokeWidth="2"
          style={{ stroke: 'rgb(180, 180, 180)', opacity: 0.2 }}
        ></circle>
        <circle
          cx="16"
          cy="16"
          fill="none"
          r="14"
          strokeWidth="2"
          style={{
            stroke: 'rgb(180, 180, 180)',
            strokeDasharray: 80,
            strokeDashoffset: 60,
          }}
        ></circle>
      </svg>
    </div>
  );
}
