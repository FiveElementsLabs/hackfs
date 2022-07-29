export default function Bubbles({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <div
        className="absolute top-0 right-0 -translate-y-[100px] opacity-10 
        w-[600px] h-[600px] bg-no-repeat bg-center bg-contain -z-10"
        style={{ backgroundImage: "url(/landing/Bubble01.png)" }}
      />
      <div
        className="absolute top-0 left-0 -translate-y-[200px] opacity-10
        w-[800px] h-[1300px] bg-no-repeat bg-center bg-contain -z-10"
        style={{ backgroundImage: "url(/landing/Bubble02.png)" }}
      />
      <div
        className="absolute top-0 left-0 translate-x-[70px] translate-y-[1050px] opacity-10 
        w-[650px] h-[650px] bg-no-repeat bg-center bg-contain -z-10"
        style={{ backgroundImage: "url(/landing/Bubble03.png)" }}
      />
      <div
        className="absolute top-0 right-0 translate-y-[1100px] opacity-10 
        w-[650px] h-[1100px] bg-no-repeat bg-center bg-contain -z-10"
        style={{ backgroundImage: "url(/landing/Bubble04.png)" }}
      />
      <div
        className="absolute bottom-0 left-0 opacity-10 
        w-[900px] h-[600px] bg-no-repeat bg-center bg-contain -z-10"
        style={{ backgroundImage: "url(/landing/Bubble05.png)" }}
      />
    </div>
  );
}
