import heroImg from '/images/Hero_Computer_Vector.svg'

function Hero() {
  return (
    // Introduction text
    <div id="hero" className="my-8 flex items-center flex-col px-8">
      <h2 className="text-4xl font-bold">
        Hey, I am{' '}
        <span className="text-4xl font-bold text-orange-400">Phil</span>
      </h2>
      <p className="font-semibold text-lg mb-4">A frontend Webdeveloper</p>
      <img className="max-w-[800px] mx-auto" src={heroImg} alt="Computer" />
    </div>
  )
}

export default Hero
