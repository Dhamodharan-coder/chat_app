const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center flex-col justify-center bg-base-200 p-12">
      <div className="max-w-md text-center">
      
           <div  className={` rounded-2xl bg-primary/10 overflow-hidden h-80 w-80 cursor-pointer mb-10 animate-bounce`}>
            <img src='https://i.pinimg.com/564x/21/d9/32/21d9324987c21f12863b8f1131f892ad.jpg' 
               className={`aspect-square rounded-2xl bg-primary/10`}
                 alt="Profile" />
          </div>
    
 
        </div>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base-content/60">{subtitle}</p>
      </div>
   
  );
};

export default AuthImagePattern;
