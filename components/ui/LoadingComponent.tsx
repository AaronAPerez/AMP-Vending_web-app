export default function LoadingComponent() {
    return (
      <div className="w-full py-16 flex items-center justify-center bg-[#000000]">
        <div className="text-center">
          <div className="inline-block w-12 h-12 border-4 border-[#A5ACAF] border-t-[#FD5A1E] rounded-full animate-spin"></div>
          <p className="mt-4 text-[#F5F5F5]">Loading...</p>
        </div>
      </div>
    );
  }