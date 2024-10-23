        import Link from "next/link";
import{ db } from "~/server/db"

/*const mockUrls =[
  "https://utfs.io/f/4dae79df-c318-48a6-b183-cf33b90435de-1ody.jpg",
  "https://utfs.io/f/0f6416e1-dd36-4703-a778-9b12c51c6106-1nq2cb.jpg",
  "https://utfs.io/f/5d996f96-b324-4a55-b818-73f9adf8a317-5yh1cl.webp",
  "https://utfs.io/f/cc91770a-afb2-4cee-b1df-f7bc72670b65-2a.jpg",
  "https://utfs.io/f/becde3ac-fe1e-46bd-9767-dd27e694561b-63vra7.webp",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}))
*/

export default async function HomePage() {
  const images = await db.query.images.findMany();
   return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {images.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
            <div className="font-sans">{image.name} </div>
      </div>
      ))}
        </div>
        
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
    <figure>
      <img
        src=  "https://utfs.io/f/4dae79df-c318-48a6-b183-cf33b90435de-1ody.jpg"
        alt="Shoes" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">The Great Wall of China</h2>
      <p>World Heritage Sites in China</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Travel Here Now</button>
      </div>
    </div>
  </div>

  <div className="carousel carousel-end rounded-box">
  <div className="carousel-item">
    <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp" alt="Drink" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
      alt="Drink" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
      alt="Drink" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
      alt="Drink" />
  </div>
  <div className="carousel-item">
    <img src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp" alt="Drink" />
  </div>
  <div className="carousel-item">
    <img src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp" alt="Drink" />
  </div>
  <div className="carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
      alt="Drink" />
  </div>
</div>
<div className="stats shadow">
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-8 w-8 stroke-current">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    </div>
    <div className="stat-title">Downloads</div>
    <div className="stat-value">31K</div>
    <div className="stat-desc">Jan 1st - Feb 1st</div>
  </div>

  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-8 w-8 stroke-current">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
      </svg>
    </div>
    <div className="stat-title">New Users</div>
    <div className="stat-value">4,200</div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>

  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-8 w-8 stroke-current">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path>
      </svg>
    </div>
    <div className="stat-title">New Registers</div>
    <div className="stat-value">1,200</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
</div>
<div className="mockup-phone border-primary">
  <div className="camera"></div>
  <div className="display">
    <div className="artboard artboard-demo phone-1">Hi!</div>
  </div>
</div>
    </main>
  );
}
