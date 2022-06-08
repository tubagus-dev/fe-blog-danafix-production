export default function Container({ children }) {
  return (
    <div className="w-full max-w-full md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1180px] 2xl:max-w-[1364px] px-[0.9375rem] mx-auto">
      {children}
    </div>
  );
}
