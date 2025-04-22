"use client";

const DemoModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50">
            <div className="bg-[#fefaf6] rounded-2xl p-8 w-full max-w-md relative shadow-lg">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-[30px] text-black"
                >
                    &times;
                </button>
                <h2 className="text-[16px] font-bold text-BgColor text-center">
                    Book a Free Demo Class
                </h2>
                <p className="text-gray-400 text-center text-sm mt-2 mb-6">
                    Fill up this form and we will connect you shortly
                </p>
                <form className="flex flex-col gap-4">
                    <div>
                        <label className="block text-sm text-[#655945] mb-1">Name</label>
                        <input
                            type="text"
                            className="w-full border border-[#6559453D]/30 rounded-md p-2"
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-[#655945] mb-1">Email ID</label>
                        <input
                            type="email"
                            className="w-full border border-[#6559453D]/30 rounded-md p-2"
                        />
                    </div>
                    <select className="p-2 rounded-md text-[13px] bg-[#FFF3E1]">
                        <option>Choose your curriculum syllabus</option>
                    </select>
                    <select className="p-2 rounded-md text-[13px] bg-[#FFF3E1] ">
                        <option>Choose your class</option>
                    </select>
                    <select className="p-2 rounded-md text-[13px] bg-[#FFF3E1]">
                        <option>Choose your course</option>
                    </select>
                    <div>
                        <label className="block text-sm text-[#655945] mb-1">Write your Message</label>
                        <textarea
                            rows="3"
                            className="w-full border border-[#6559453D] rounded-md p-2"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-BgColor text-white py-2 rounded-md"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default DemoModal;
