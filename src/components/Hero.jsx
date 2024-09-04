/* eslint-disable react/no-unescaped-entities */
import Button from "./Button";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-5">
      <div className="flex flex-col gap-4 ">
        <p>IT'S TIME TO GET</p>
        <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          IN<span id="span-3" className="text-blue-400 text-shadow-blue">SHAPE</span>
        </h1>
      </div>

      <p className="text-sm md:text-base font-light">
        Unlock your full potential with our
        <span id="span-1"  className="text-blue-400 font-medium"> all-in-one gym app! </span>
        Whether you're a fitness newbie or a seasoned pro, our app is designed{" "}
        <span id="span-2" className="text-blue-400 font-medium">
          to help you achieve your goals faster and smarter
        </span>
        . With personalized workout plans, expert guidance, real-time progress
        tracking, and a supportive community at your fingertips, staying
        motivated has never been easier. Subscribe today and take the first step
        toward a healthier, stronger you. Don’t wait—your transformation starts
        now!
      </p>
      <Button
       func={()=>{
        window.location.href = '#generate'
       }}
      className="blueShadow" text={"Begin Your Journey"}/>
    </div>
  );
}
