export default function StickyCallBar() {
  return (
    <a
      href="tel:+13234465001"
      className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center gap-2 bg-yellow-500 py-4 text-lg font-bold text-black md:hidden"
    >
      📞 Call Now: (323) 446-5001
    </a>
  );
}
