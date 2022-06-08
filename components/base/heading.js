export default function Heading({ variant, title }) {
  if (variant === 'h1') {
    return (
      <div className="block mb-8">
        <h1 className="m-0 font-sans font-semibold text-4xl !leading-[1.2] text-secondary">
          {title}
        </h1>
      </div>
    );
  }

  if (variant === 'h2') {
    return (
      <div className="block mb-8">
        <h2 className="m-0 font-sans font-semibold text-3xl !leading-[1.2] text-secondary">
          {title}
        </h2>
      </div>
    );
  }

  if (variant === 'h3') {
    return (
      <div className="block mb-8">
        <h3 className="m-0 font-sans font-semibold text-2xl !leading-[1.2] text-secondary">
          {title}
        </h3>
      </div>
    );
  }

  if (variant === 'h4') {
    return (
      <div className="block mb-8">
        <h4 className="m-0 font-sans font-semibold text-xl !leading-[1.2] text-secondary">
          {title}
        </h4>
      </div>
    );
  }

  if (variant === 'h5') {
    return (
      <div className="block mb-8">
        <h5 className="m-0 font-sans font-semibold text-lg !leading-[1.2] text-secondary">
          {title}
        </h5>
      </div>
    );
  }

  return (
    <div className="block mb-8">
      <h6 className="m-0 font-sans font-semibold text-base !leading-[1.2] text-secondary">
        {title}
      </h6>
    </div>
  );
}
