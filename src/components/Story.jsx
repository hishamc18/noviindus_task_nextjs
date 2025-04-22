import Image from "next/image";
import SlantedButton from "./Button";

const Story = () => {
    return (
        <section className="relative bg-white py-14 px-4 md:px-8">
            <div className="mx-auto px-24 flex flex-col md:flex-row justify-between items-center gap-24">
                {/* Text Section */}
                <div className="md:w-2/3">
                    <h2 className="text-2xl md:text-[36px] font-Bricolage text-[#655945] mb-4">
                        The Story of <strong>Educare</strong>
                    </h2>
                    <p className="mb-4 text-[#655945]">
                        At <strong>Educare</strong> education center, we believe that every student deserves personalized,
                        focused attention to reach their fullest potential. Our mission is to empower students through
                        one-on-one tutoring, creating customized learning plans tailored to each individual's unique needs,
                        strengths, and learning styles.
                    </p>
                    <p className="mb-4 text-[#655945]">
                        Founded on a passion for education and a commitment to excellence, <strong>Educare</strong>{" "}
                        education center was established to offer students a supportive and engaging learning environment.
                        Our team of experienced tutors is dedicated to helping students excel academically while also
                        building confidence, independence, and a love for learning.
                    </p>
                    <p className="mb-6 text-[#655945]">
                        We specialize in a wide range of subjects across all grade levels, including math, science, English,
                        and test preparation. Whether your child needs help catching up, getting ahead, or preparing for a
                        specific exam, we are here to support their journey.
                    </p>
                    <SlantedButton text="Read More" />
                </div>

                {/* Image Section */}
                <div className="relative md:w-1/3 flex justify-center items-center">
                    <div>
                        <Image src="/Story/photos.png" alt="Tutoring Space 1" width={400} height={4220} />
                    </div>
                </div>
            </div>

            {/*Cards */}
            <div className="mt-16 flex px-24 flex-col md:flex-row justify-center items-start gap-8">
                {/* Mission Card */}
                <div className="relative bg-[#FFF3E1] rounded-2xl px-6 py-8 shadow-md w-[500px]">
                    <div className="mr-20">
                        <h3 className="text-[20px] font-bold text-BgColor mb-2">Mission</h3>
                        <p className="text-BgColor text[14px]">
                            To help students succeed with personalized, <strong>one-to-one</strong> tutoring that builds
                            confidence, skills, and a love for learning.
                        </p>
                    </div>
                    <div className="absolute -top-8 right-0 w-[150px] h-[200px]">
                        <Image src="/Story/storycard1.png" alt="Mission Icon" layout="fill" objectFit="contain" />
                    </div>
                </div>

                {/* Vision Card */}
                <div className="relative bg-[#FFF3E1] rounded-2xl px-6 py-8 shadow-md w-[500px]">
                    <div className="mr-20">
                        <h3 className="text-xl font-bold text-BgColor mb-2">Vision</h3>
                        <p className="text-BgColor">
                            To be a trusted center where students reach their potential, build confidence, and prepare for a{" "}
                            <strong>bright future</strong>.
                        </p>
                    </div>
                    <div className="absolute -top-8 right-0 w-[150px] h-[200px]">
                        <Image src="/Story/storycard2.png" alt="Vision Icon" layout="fill" objectFit="contain" />
                    </div>
                </div>
                <div className="-mt-14 rotate-[-20deg]">
                    <Image src="/Story/curve_arrow.png" alt="Curved Arrow" width={180} height={200} />
                </div>
            </div>
        </section>
    );
};

export default Story;
