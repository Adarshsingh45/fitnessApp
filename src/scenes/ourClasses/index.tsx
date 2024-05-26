import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Train under the supervision of the best weight lifters and equipments.Enjoy a smooth and injury free weight lifting journey.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:"Yoga instructors will help you to improve your posture and life expectancy.",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Core fuels all our pull and push movements and so training it is a must for each one of us and so we provide specific classes for core training.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Join our Adventure Classes and conquer new heights, from rock climbing to wilderness survival! Unleash your inner explorer with our dynamic Adventure Classes – where every workout is an expedition!",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description:"Elevate your workout routine with our diverse Fitness Classes – designed to boost your strength, endurance, and flexibility! Transform your fitness journey with our energizing Fitness Classes, perfect for all levels and goals!",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Enhance your performance with our expert-led Training Classes, tailored to meet your individual fitness goals! Achieve your peak potential with our dynamic Training Classes, focusing on strength, agility, and endurance!",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              
Discover Our Classes – Diverse Workouts Tailored for Every Fitness Journey!
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;