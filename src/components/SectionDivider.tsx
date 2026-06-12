const SectionDivider = () => {
  return (
    <div className="w-full flex justify-center py-2">
      <svg
        width="120"
        height="8"
        viewBox="0 0 120 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-border"
      >
        <path
          d="M0 4 Q 8 2, 16 4 T 32 4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M44 4 Q 52 6, 60 4 T 76 4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M88 4 Q 96 2, 104 4 T 120 4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default SectionDivider;
