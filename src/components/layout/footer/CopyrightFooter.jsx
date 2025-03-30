export default function CopyrightFooter() {
  return (
    <div className="bg-[#122A4E] md:px-[100px] h-[76px]  md:h-[48px]  w-full flex flex-col md:flex-row justify-center md:justify-between items-center">
      <div className="flex items-center justify-center gap-1 text-[#FFF]">
        <p className="extra-small">© 2024.</p>{" "}
        <p className="extra-small ">Logoipsum.</p>
        <p className="extra-small ">All Rights Reserved.</p>
      </div>

      <div className="flex items-center justify-center gap-2 text-[#FFF]">
        <p className="extra-small">Policy</p>
        <p className="extra-small">|</p>
        <p className="extra-small">Terms & Conditions</p>
      </div>
    </div>
  );
}
