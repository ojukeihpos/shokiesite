export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center h-[70vh] w-full">
      <div className="font-mono tracking-[0.3em] uppercase animate-pulse" 
           style={{ 
             color: '#c93e25', 
             textShadow: '0 0 12px rgba(201, 62, 37, 0.6)',
             fontWeight: 'bold' 
           }}>
        [ System_Initializing ]
      </div>
      
      <div className="w-48 h-[2px] bg-[#c93e25]/20 mt-6 overflow-hidden">
        <div className="h-full bg-[#c93e25] animate-loading-bar shadow-[0_0_8px_#c93e25]"></div>
      </div>

      <div className="mt-4 text-[10px] text-[#c93e25]/50 font-mono uppercase">
        Girls are now praying...
      </div>
    </div>
  );
}