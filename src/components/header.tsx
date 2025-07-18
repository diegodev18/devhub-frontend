export default function Header() {
  return (
    <header className="fixed grid grid-cols-3 items-center h-[60px] bg-dark-secondary w-full overflow-hidden px-main-x">
      <a href="/" className="hover:brightness-125 transition">
        <img src="/vite.svg" alt="Logo" className="h-8 w-auto" />
      </a>
      <input className="max-h-[calc(100%-25px)] size-full px-2.5 bg-zinc-800 rounded-lg outline-none font-medium"></input>
      <a
        href="/user"
        className="flex justify-end hover:brightness-125 transition"
      >
        <img src="/vite.svg" alt="Logo" className="h-8 w-auto" />
      </a>
    </header>
  );
}
