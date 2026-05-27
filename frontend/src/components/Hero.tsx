export default function Hero() {
  return (
    <div className="grid grid-cols-2 h-screen bg-gray-50">
      <div className="p-8 border-r border-gray-200">
        <h2 className="text-2xl font-bold text-[#1a365d] mb-4">Job Description</h2>
        <textarea
          className="w-full h-96 p-4 border rounded-lg resize-none"
          placeholder="Paste job description here..."
        />
      </div>
      <div className="p-8 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-[#1a365d] mb-4">Upload CV</h2>
        <input type="file" className="border p-2 rounded" />
      </div>
    </div>
  );
}