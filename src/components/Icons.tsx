type Props = { className?: string };

const base = "h-7 w-7 stroke-[1.4] stroke-current fill-none";

export function ServiceIcon({ name, className = "" }: { name: string; className?: string }) {
  const cls = `${base} ${className}`;
  switch (name) {
    case "scissors":
      return (
        <svg viewBox="0 0 24 24" className={cls} aria-hidden="true">
          <circle cx="6" cy="18" r="2.6" />
          <circle cx="18" cy="18" r="2.6" />
          <path d="M8 16.2 19 3M16 16.2 5 3" strokeLinecap="round" />
        </svg>
      );
    case "combo":
      return (
        <svg viewBox="0 0 24 24" className={cls} aria-hidden="true">
          <path d="M4 20c0-4.4 3.6-8 8-8s8 3.6 8 8" strokeLinecap="round" />
          <path d="M8 12V7a4 4 0 0 1 8 0v5" strokeLinecap="round" />
          <path d="M3 4l4 2M21 4l-4 2" strokeLinecap="round" />
        </svg>
      );
    case "razor":
      return (
        <svg viewBox="0 0 24 24" className={cls} aria-hidden="true">
          <path d="M3 17.5 14.5 6l3.5 3.5L6.5 21H3z" strokeLinejoin="round" />
          <path d="M16 4.5 19.5 8" strokeLinecap="round" />
        </svg>
      );
    case "spark":
      return (
        <svg viewBox="0 0 24 24" className={cls} aria-hidden="true">
          <path d="M12 3v5M12 16v5M3 12h5M16 12h5" strokeLinecap="round" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case "brow":
      return (
        <svg viewBox="0 0 24 24" className={cls} aria-hidden="true">
          <path d="M3 13c3-5 15-5 18 0" strokeLinecap="round" />
          <path d="M6.5 16.5c2.5 2.5 8.5 2.5 11 0" strokeLinecap="round" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className={cls} aria-hidden="true">
          <path d="M3 8l4 4 5-7 5 7 4-4-2 11H5L3 8z" strokeLinejoin="round" />
        </svg>
      );
  }
}

export function WhatsAppIcon({ className = "" }: Props) {
  return (
    <svg viewBox="0 0 24 24" className={`h-5 w-5 fill-current ${className}`} aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2zm0 2a8 8 0 0 1 0 16 8 8 0 0 1-4.2-1.2l-.3-.2-2.5.7.7-2.4-.2-.3A8 8 0 0 1 12 4zm-3 4c-.2 0-.5 0-.8.4-.3.4-1 1-1 2.3 0 1.4 1 2.7 1.2 2.9.1.2 2 3.1 4.9 4.2 2.4.9 2.9.7 3.4.7.5 0 1.6-.6 1.8-1.3.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3l-2-1c-.3-.1-.5-.2-.7.1l-.9 1.2c-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.1-.3 0-.4.2-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6L9.7 8.4C9.5 8 9.3 8 9.1 8H9z" />
    </svg>
  );
}

export function InstagramIcon({ className = "" }: Props) {
  return (
    <svg viewBox="0 0 24 24" className={`h-5 w-5 fill-current ${className}`} aria-hidden="true">
      <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2 0 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c0 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2 0-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c0-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 3.2A6.6 6.6 0 1 0 18.6 12 6.6 6.6 0 0 0 12 5.4zm0 2.2A4.4 4.4 0 1 1 7.6 12 4.4 4.4 0 0 1 12 7.6zm6.9-2.6a1.5 1.5 0 1 0 1.5 1.5 1.5 1.5 0 0 0-1.5-1.5z" />
    </svg>
  );
}

export function PinIcon({ className = "" }: Props) {
  return (
    <svg viewBox="0 0 24 24" className={`h-5 w-5 fill-none stroke-current stroke-[1.5] ${className}`} aria-hidden="true">
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}
