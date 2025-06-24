export const ChildIllustration = () => {
  return (
    <div className='relative'>
      <div
        className={`relative rounded-3xl p-6 aspect-[4/3] max-h-[400px] overflow-hidden backdrop-blur-sm bg-opacity-90 shadow-lg`}
      >
        <div
          className='absolute inset-0 w-full h-full'
          style={{
            backgroundImage: "url('/src/assets/images/baby.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
      </div>
    </div>
  );
};
