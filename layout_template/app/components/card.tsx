export const Card = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="m-[10px] flex items-center justify-center border border-[#ddd] p-[100px] shadow-[0_4px_8px_0_rgba(0,0,0,0.2)] font-bold">
      {children}
    </div>
  );
};