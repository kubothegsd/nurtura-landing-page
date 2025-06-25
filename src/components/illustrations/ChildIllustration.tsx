export const ChildIllustration = () => {
  return (
    <div className='relative z-2'>
      <div className={`relative aspect-[4/3] w-[489px]`}>
        <div
          className='absolute inset-0 w-full h-full overflow-hidden rounded-3xl'
          style={{
            backgroundImage: "url('/images/baby.jpg')",
            backgroundSize: '101%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
      </div>
    </div>
  );
};
