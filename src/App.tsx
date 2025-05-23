import './App.css'

function App() {

  return (
    <>
      <header>
        <nav className='navbar navbar-expand-lg bg-danger bg-primary d-flex justify-content-between px-5 fs-4'>
          <a href="" className='navbar-brand fs-2 text-border'><img src="https://images.ctfassets.net/pdf29us7flmy/2ZtlOujWNf4ztl5wbRnTpC/4a394c414c6a2e3f68749802e5e4d042/GettyImages-689291632_optimized.jpg" alt="" />My life</a>
          <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#About">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#Project">Project</a></li>
              <li className="nav-item"><a className="nav-link" href="#Contact">Contact</a></li>
            </ul>
          </div>
        </nav>
      </header>
      <main>
        {/* <!-- banner --> */}
        <div id="banner" className=" text-center bg-warning py-4">
          <div className="container">
            <h1>Rayimberganov Nurbek</h1>
            <p>Kelajak uchun sayohat!</p>
          </div>
        </div>

        {/* About */}
        <section id="About" className='p-3'>
          <div className='container'>
            <h1 className='py-3'>About</h1>
            <div className='row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 fs-4 d-flex justify-content-around'>
              <div className='col shadow border border-0 rounded p-2'>
                <div className="card border-0">
                  <h4>👨‍💻 Nurbek haqida:</h4>
                  <p>Nurbek — web dasturlashga qiziqqan, o‘zini front-end developer sifatida rivojlantirmoqchi bo‘lgan yosh va iqtidorli o‘quvchi.</p>
                  <p>
                    U HTML, CSS, JavaScript kabi asoslarni o‘rganmoqda va sodda, lekin foydali komponentlar yaratishda amaliyot qilmoqda.
                  </p>
                  <p>
                    Nurbek — o‘rganishga chanqoq, harakatdan to‘xtamayotgan, o‘z yo‘lini topayotgan va kelajakda web dasturlash olamida porlaydigan inson! 🚀</p>
                </div>
              </div>
              <div className='col shadow border border-0 rounded p-2'>
                <div className="card border-0">
                  <h4>👨‍💻 U o‘zini:</h4>
                  <p>Oddiy va tushunarli kod yozishga intiladigan</p>
                  <p>Bosqichma-bosqich o‘rganishni yoqtiradigan</p>
                  <p>Tayyor portfolio sahifa yaratmoqchi bo‘lgan</p>
                  <p>Dars beradigan o‘qituvchi sifatida ham o‘zini ko‘rsatmoqchi</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className='pb-5'>
          <div className="container">
            <h2 className='py-3'>My Projects</h2>
            <div className="row row-cols-1 row-cols-sm-1 row-cols-lg-3 row-cols-md-3 " >
              <div className="col">
                <div className='card shadow mb-2'>
                  <img src="https://i.ytimg.com/vi/G0jO8kUrg-I/maxresdefault.jpg" alt="" />
                  <div className="cadr-body p-2">
                    <h3 className='car-title pt-3'>To-Do App</h3>
                    <p className='card-text py-3'>Vazifalarni qo‘shish va o‘chirish uchun oddiy web ilova. JavaScript bilan yozilgan.</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className='card shadow mb-2'>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXdXZIUHozC2mg05dvp0x7DBP4DnCUNR0DnQ&s" alt="" />
                  <div className="cadr-body p-2">
                    <h3 className='car-title pt-3'>Weather App</h3>
                    <p className='card-text py-3'>Ob-havo ma’lumotlarini Weather API orqali olish. Foydalanuvchi shahar nomini kiritadi.</p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className='card shadow mb-2'>
                  <img src="https://cdn-icon.bluestacks.com/9TYfWJcE65BIe7Dw17CMr4xbm_k2buhw0oz8RYvGAO8EjiQuFdUZTEOoN8tUtlXqBw=s0" alt="" />
                  <div className="cadr-body p-2">
                    <h3 className='car-title pt-3'>Color Changer</h3>
                    <p className='card-text py-3'>Tugmani bosganda sahifaning fon rangi o‘zgaradi. Juda sodda va qiziqarli loyihadir.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* footer Contact */}

      <footer id="Contact" className="bg-danger p-4">
  <div className="container">
    <h5 className="text-center">
      Salom! Men Nurbekman, bu yerda mening haqimda ma'lumotlar bor va quyidagi ijtimoiy tarmoqlar orqali meni kuzatib boring:
    </h5>
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 text-center">
      <div className="col mb-4">
        <i className="fa-brands fa-instagram">
          <a
            href="https://www.instagram.com/rayimberganov_nuroo7_official/profilecard/?igsh=MWgwbG93cmQ0Ymc4"
            className="fw-bolder font-monospace"
          >
            rayimbergnov_nurbek
          </a>
        </i>
      </div>
      <div className="col mb-4">
        <i className="fa-brands fa-telegram ">
          <a href="https://t.me/Xushnudbekivich_01" className="fw-bolder font-monospace">
            rayimbergnov_nurbek
          </a>
        </i>
      </div>
      <div className="col mb-4">
        <i className="fa-brands fa-facebook ">
          <a href="https://www.facebook.com/share/17xCx6Tyb8/?mibextid=wwXIfr" className="fw-bolder font-monospace">
            rayimbergnov_nurbek
          </a>
        </i>
      </div>
    </div>
  </div>
</footer>

    </>
  )
}

export default App