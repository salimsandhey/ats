export default function Lightbox({ image, onClose }) {
  if (!image) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-12 animate-in fade-in duration-300"
      onClick={onClose}
    >
      <button
        className="absolute top-10 right-10 text-white hover:text-brand-primary transition-colors cursor-pointer group"
        onClick={onClose}
      >
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <div
        className="relative max-w-5xl max-h-full overflow-hidden rounded-3xl shadow-2xl animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={image} alt="Gallery Full View" className="w-full h-auto object-contain" />
      </div>
    </div>
  )
}
