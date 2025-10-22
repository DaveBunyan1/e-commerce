export default function Home() {
  return (
    <>
      <nav className="flex items-center justify-between bg-white dark:bg-neutral-900 p-4 md:px-16 lg:px-32">
        <div>Logo</div>
        <ul className="flex gap-x-4">
          <li>Home</li>
          <li>Shop</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
        <ul>
          <li>Account</li>
        </ul>
      </nav>
      <main className="bg-white dark:bg-black w-full h-full flex flex-col gap-y-32 items-center p-4">
        <section>Banner</section>
        <section>Featured Products</section>
        <section>Popular Products</section>
        <section>Call To Action</section>
        <footer>Footer</footer>
      </main>
    </>
  );
}
