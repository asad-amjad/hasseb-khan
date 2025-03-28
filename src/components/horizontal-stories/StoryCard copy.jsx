import React from "react";

export default function StoryCard() {
  return (
    <div className="flex justify-start gap-[20px] items-stretch h-[300px]">
      <div className="bg-[#FBFBFB] min-w-[280px] md:min-w-[320px] lg:min-w-[380px] p-[20px] flex flex-col gap-[20px] ">
        <div className="flex justify-start items-center gap-[11px]">
          <img
            src="https://s3-alpha-sig.figma.com/img/b129/c1e4/400beb9fdfdc78748ddc9d512af3b7c9?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=g30SwvT6s2nmm46FBftIlW6Zht8QUZJ5WkxyXU-x~MeIvNts8J5vIugscUbs69z9NWoxVKR4i~HoIlb17lLYS2~~-Sb6R8hV1k3Qs7bqmYJG1~qiPCbAM2a6sZK9Wd56KYjOKyOIOxFkIvq8H4P4MPEXKpXvCOVqx2hIgHdbXqltwU4tNUhQxEJRTi3q8TLuHY-A5ZyPYcVw~7t3vzE2tWfrv-ZWK9vxqaCH30w2KgkSRwpyRg18SGnpB7BwMJdw43EhqOuI4IbaKb~MgXUwkTbXiAW78L4NKsdLrmul-MYNi6rGgT0VoIusEU5htpcSu1mToIMP2s9~C17qzj4tRA__"
            alt="review-pfp"
            className="w-[50px] h-[50px] rounded-[100%]"
          />
          <div className="flex flex-col justify-start items-start gap-[2px]">
            <h2 className="text-[#E55D48] font-sans text-[18px] lg:text-[20px] font-semibold ">
              Frankie
            </h2>
            <p className="text-[#111] font-sans text-[12px] lg:text-[16px] font-normal ">
              New Parents
            </p>
          </div>
        </div>
        <p className="text-[#111] font-sans text-[14px] lg:text-[16px] font-light leading-[23px]">
          Lorem ipsum dolor sit amet consectetur. Neque curabitur tellus id
          malesuada erat. Vel a netus ultrices et interdum in. Lorem mauris
          ultrices enim ac diam. Sodales eget consequat mi congue nunc et
          molestie phasellus pharetra. Et cursus non quis at.
        </p>
      </div>
      <div
        className="min-w-[280px] md:min-w-[320px] lg:min-w-[380px]"
        style={{
          backgroundImage:
            "url(https://s3-alpha-sig.figma.com/img/161d/41a0/3a6d24be410075837eb56ad341886283?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=IoRf4CUBVbhzHBbXUKCc6dGfvPNMoRy4xuXMiYHDEwOl3WKGzUDwCJ6tltLBifz2mp83KIXBdYFpwYk6SuNEEzdRQiUkdNx8d8KTgJq9MvFJfLSLQ3OvE30hnpnCQL6KrsRGCIRhAX86Joj~nOdarz0iJMXTNlO-JA4Au-TxZ61wubztC9RqZS-UHEn85Igjl45MmO~-cIQRoqQBhV6Yz3SD--5B6w4VsuHMFGwzTxaJSdAYz61W4ltrCR9AcAt8ORDbCAvcyiRPlOGhrNY9erbRjraeyNvorFW0XE6ktLcGdGQLRAs9G73D168CEOyMdOny5VKhBh7Cw~lkInWBSw__)",
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
}
