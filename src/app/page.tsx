export default function Home() {
  return (
    <div>
      <header>
        <div className="flex justify-center py-5">
          <img src="/patigame3.png" />
        </div>
      </header>

      <section className="flex bg-white rounded">

        {/* LEFT DIV */}
        <div className="w-1/4 flex justify-center">
          <img src="zhiyenpart.png"/>
        </div>

        {/* CENTER DIV */}
        <div className="w-1/2 mx-auto pt-5">
          <input
            type="text"
            className="w-full h-96 mb-2 bg-indigo-200 text-black placeholder:text-slate-500 text-lg border-4 border-black pl-3 pb-72"
            placeholder="Type Text..."
          />
          <button
            className="rounded bg-slate-800 py-1 px-3 border border-transparent text-center text-sm text-white
              transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none
              disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            SEND
          </button>
        </div>

        {/* RIGHT DIV */}
        <div className="w-1/4 flex justify-center">
          <img src="/enanopart.png"/>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="flex justify-center pt-12">
        <img src="/maradino.png"/>
      </footer>
    </div>
  );
}
