export function GoogleMapsIframe() {
  return (
    <div className="aspect-16/7 min-h-72 w-full overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d256.6731715590495!2d-4.998795604367857!3d34.04485860082748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd9f8b295f1237bd%3A0xcb64c2b55d28d04d!2sL'UNICREATIVE!5e0!3m2!1sen!2sma!4v1790415003121!5m2!1sen!2sma"
        title="Localisation de L’UNICREATIVE à Fès"
        className="block h-full w-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}
