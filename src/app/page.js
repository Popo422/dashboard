"use client";
import BodyContainer from "@/components/BodyContainer";

export const dynamic = "force-dynamic";
function Home() {
  return (
    <main className="w-full h-full bg-[rgba(255, 255, 255, 1)]  justify-normal flex items-center ">
      <div className="w-full h-full flex  justify-start p-14">
        <div
          className={`bg-[#d3d3d399] w-full h-2/3 rounded-[22px] flex gap-5 py-2 px-8`}
        >
          <div className="flex flex-col justify-center w-full ">
            <div className="flex flex-col gap-10 ">
              <div>
                <span className="text-black text-2xl font-bold">
                  Welcome to your dashboard
                </span>
              </div>
              <div>
                <span className="text-gray-500 text-md ">
                  Creating some contacts is the step toward inviting bidders,
                  announcing addenda, or sending project updates
                </span>
              </div>
              <div>
                {" "}
                <button className="bg-black p-4 rounded-2xl text-md">
                  Create A Contact
                </button>
              </div>
            </div>
          </div>
          <div className="w-full h-full py-5 px-3 flex justify-center items-center"> <img src={"/images/screenshot.png"} className="w-full h-[350px] min-w-[400px]" /></div>
        </div>
      </div>
    </main>
  );
}

export default Home;
