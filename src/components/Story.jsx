import Image from "next/image";
import SlantedButton from "./Button";
import StoryCard from "./StoryCard";

const Story = () => {
    return (
        <section className="relative bg-white py-14 px-4 md:px-8">
            <div className="mx-auto md:px-24 flex flex-col md:flex-row justify-between items-center gap-12 md:gap-24">
                {/* Text Section */}
                <div className="w-full md:w-2/3">
                    <h2 className="text-2xl md:text-[36px] font-Bricolage text-[#655945] mb-4">
                        The Story of <strong>Educare</strong>
                    </h2>
                    <p className="mb-4 pl-2 text-[14px] md:text-[15px] text-[#655945]">
                        At <strong>Educare</strong> education center, we believe that every student deserves personalized,
                        focused attention to reach their fullest potential. Our mission is to empower students through
                        one-on-one tutoring, creating customized learning plans tailored to each individual's unique needs,
                        strengths, and learning styles.
                    </p>
                    <p className="mb-4 pl-2 text-[14px] md:text-[15px] text-[#655945]">
                        Founded on a passion for education and a commitment to excellence, <strong>Educare</strong>{" "}
                        education center was established to offer students a supportive and engaging learning environment.
                        Our team of experienced tutors is dedicated to helping students excel academically while also
                        building confidence, independence, and a love for learning.
                    </p>
                    <p className="mb-6 pl-2 text-[14px] md:text-[15px] text-[#655945]">
                        We specialize in a wide range of subjects across all grade levels, including math, science, English,
                        and test preparation. Whether your child needs help catching up, getting ahead, or preparing for a
                        specific exam, we are here to support their journey.
                    </p>
                    <div className="mt-10 scale-90">
                        <SlantedButton text="Read More" />
                    </div>
                </div>

                {/* Image Section */}
                <div className="w-full md:w-1/3 flex justify-center items-center">
                    <div className="hidden md:block">
                        <Image src="/Story/photos.png" alt="Tutoring Space 1" width={400} height={4220} />
                    </div>
                </div>
            </div>

            {/* Cards */}
            <div className="md:mt-16 mt-6 flex flex-col md:flex-row md:px-24 items-start gap-8 relative">
                {/* Mission Card */}
                <StoryCard
                title="Mission"
                description="To help students succeed with personalized, <strong>one-to-one</strong> tutoring that builds confidence, skills, and a love for learning."
                imageSrc="/Story/storycard1.png"
            />
            <StoryCard
                title="Vision"
                description="To be a trusted center where students reach their potential, build confidence, and prepare for a <strong>bright future</strong>."
                imageSrc="/Story/storycard2.png"
                imagePosition="absolute -top-9 -right-2 md:w-[150px] md:h-[200px] h-[180px] w-[130px]"
            />

                {/* Curved Arrow */}
                <div className="hidden md:block -rotate-[20deg]">
                    <Image src="/Story/curve_arrow.png" alt="Curved Arrow" width={180} height={200} />
                </div>
            </div>
        </section>
    );
};

export default Story;
