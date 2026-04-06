import { Link, Outlet, useNavigate } from "react-router";

export default function Layout() {
  const navigate = useNavigate();

  const handleNavigate = (e) => {
    const value = e.target.value;
    if (value) navigate(value);
  };

  return (
    <>
      <header>
        <nav className="flex justify-between items-center px-8 py-0 bg-[#FBC946] border-b-2 border-black" style={{ fontFamily: "'Georgia', serif" }}>
          
          {/* LEFT SIDE */}
          <div className="flex items-center">
            {/* Logo / Home */}
            <Link
              to="/"
              className="flex items-center h-14 px-4 font-bold text-lg tracking-tight border-r-2 border-black hover:bg-black hover:text-[#FBC946] transition-colors duration-150"
              style={{ letterSpacing: "-0.02em" }}
            >
              მთავარი
            </Link>

            {/* Provision Select */}
            <div className="relative group h-14 flex items-center border-r-2 border-black">
              <select
                onChange={handleNavigate}
                defaultValue=""
                className="appearance-none bg-transparent h-full px-5 pr-9 cursor-pointer focus:outline-none text-sm font-medium tracking-wide hover:bg-black hover:text-[#FBC946] transition-colors duration-150"
              >
                <option value="/goal">მიზანი</option>
                <option value="/prizes">პრიზები</option>
                <option value="/rules">წესები</option>
              </select>
              <span className="absolute right-3 pointer-events-none text-xs opacity-60">▾</span>
            </div>

            {/* Tours Select */}
            <div className="relative group h-14 flex items-center border-r-2 border-black">
              <select
                onChange={handleNavigate}
                defaultValue=""
                className="appearance-none bg-transparent h-full px-5 pr-9 cursor-pointer focus:outline-none text-sm font-medium tracking-wide hover:bg-black hover:text-[#FBC946] transition-colors duration-150"
              >
                <option value="" disabled>Tours</option>
                <option value="/currentTours">მიმდინარე ტურები</option>
                <option value="/pastTours">გავლილი ტურები</option>
              </select>
              <span className="absolute right-3 pointer-events-none text-xs opacity-60">▾</span>
            </div>

            {/* Contacts */}
            <Link
              to="/contacts"
              className="flex items-center h-14 px-5 text-sm font-medium tracking-wide hover:bg-black hover:text-[#FBC946] transition-colors duration-150"
            >
              Contacts
            </Link>
          </div>

          {/* RIGHT SIDE — Personal Cabinet */}
          <div className="relative h-14 flex items-center border-l-2 border-black">
            <select
              onChange={handleNavigate}
              defaultValue=""
              className="appearance-none bg-transparent h-full pl-5 pr-10 cursor-pointer focus:outline-none text-sm font-semibold tracking-wide hover:bg-black hover:text-[#FBC946] transition-colors duration-150"
            >
              <option value="" disabled>პირადი კაბინეტი</option>
              <option value="/register">რეგისტრაცია</option>
              <option value="/login">შესვლა</option>
            </select>
            <span className="absolute right-4 pointer-events-none text-xs opacity-60">▾</span>
          </div>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="border-t-2 border-black p-6" style={{ fontFamily: "'Georgia', serif" }}>
        <p className="mb-3 text-sm font-semibold tracking-widest uppercase opacity-50">AI FOOTERI TO</p>
        <nav className="flex gap-6">
          <Link to="/" className="text-sm font-medium hover:underline underline-offset-4">Home</Link>
          <Link to="/contacts" className="text-sm font-medium hover:underline underline-offset-4">Contacts</Link>
        </nav>
      </footer>
    </>
  );
}