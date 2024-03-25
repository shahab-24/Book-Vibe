

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-base-200 banner max-w-5xl mx-auto ">
    <div className="hero-content flex-col lg:flex-row-reverse px-20">
      <img src="/public/the-holy-quran.webp" className="max-w-sm rounded-lg shadow-2xl" />
      <div>
        <h1 className="text-5xl font-bold">Books to freshen <br></br> up your bookshelf</h1>
        <p className="py-6">You get a reward for each letter you read in the Quran, not for every word, and each deed you get equals ten rewards....
        As for the one who recites with difficulty, stammering or stumbling through its verses, then he will have twice that reward.” [Al-Bukhari and Muslim].</p>
        <button className="btn btn-primary bg-[chartreuse] text-black font-bold">View The List</button>
      </div>
    </div>
  </div>
  );
};

export default Banner;