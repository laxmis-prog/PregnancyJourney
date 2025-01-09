import raspberryImage from "../assets/raspberry.jpg";
import appleseedImage from "../assets/appleseed.jpg";
import avocadoImage from "../assets/avocado.jpg";
import bananaImage from "../assets/banana.jpg";
import bellPepperImage from "../assets/bell pepper.jpg";
import coconutImage from "../assets/coconut.jpg";
import earOfCornImage from "../assets/ear of corn.jpg";
import eggplantImage from "../assets/eggplant.jpg";
import largeCabbageImage from "../assets/large cabbage.jpg";
import squashImage from "../assets/squash.jpg";
import honeydewmelonImage from "../assets/honeydew melon.jpg";
import smallPumpkinImage from "../assets/small pumpkin.jpg";
import scallionImage from "../assets/scallion.jpg";
import strawberryImage from "../assets/strawberry.jpg";
import lemonImage from "../assets/lemon.jpg";
import fetusImage from "../assets/fetus.jpg";
import plumImage from "../assets/plum.jpg";
import fistImage from "../assets/fist.jpg";
import thumbImage from "../assets/thumb.jpg";
import readyImage from "../assets/ready.jpg";

const babyDevelopmentData = [
  {
    week: 1,
    title: "Your Baby at 1 Week",
    description:
      "You're not actually pregnant yet! Your body is preparing for ovulation.",
    image: null,
  },

  {
    week: 2,
    title: "Your Baby at 2 Weeks",
    description:
      "You're still not pregnant, but your body is preparing for ovulation.",
    image: null,
  },
  {
    week: 3,
    title: "Your Baby at 3 Weeks",
    description:
      "You're still not pregnant, but your body is preparing for ovulation.",
    image: null,
  },

  {
    week: 4,
    title: "Your Baby at 4 Weeks",
    description:
      "The fertilized egg implants in your uterine lining. The placenta starts to form.",
    image: null,
  },
  {
    week: 5,
    title: "Your Baby at 5 Weeks",
    description:
      "Your baby is the size of an apple seed! The brain and spinal cord begin to form.",
    image: appleseedImage,
  },
  {
    week: 6,
    title: "Your Baby at 6 Weeks",
    description: "Tiny buds that will grow into arms and legs start appearing.",
    image: null,
  },
  {
    week: 7,
    title: "Your Baby at 7 Weeks",
    description:
      "Your baby's heartbeat can be detected via ultrasound. Facial features begin to take shape.",
    image: strawberryImage,
  },
  {
    week: 8,
    title: "Your Baby at 8 Weeks",
    description:
      "Your baby is about the size of a raspberry. All major organs are forming.",
    image: raspberryImage,
  },
  {
    week: 9,
    title: "Your Baby at 9 Weeks",
    description:
      "Fingers and toes are developing. Your baby is now officially a fetus.",
    image: fetusImage,
  },
  {
    week: 10,
    title: "Your Baby at 10 Weeks",
    description:
      "Your baby is about the size of a strawberry. Their tiny organs are starting to function.",
    image: strawberryImage,
  },
  {
    week: 11,
    title: "Your Baby at 11 Weeks",
    description:
      "Your baby's fingers and toes are no longer webbed. They can make a fist!",
    image: fistImage,
  },
  {
    week: 12,
    title: "Your Baby at 12 Weeks",
    description:
      "Your baby is the size of a plum. They can open and close their fingers and curl toes.",
    image: plumImage,
  },
  {
    week: 13,
    title: "Your Baby at 13 Weeks",
    description:
      "Your baby's vocal cords are forming. They can suck their thumb and swallow.",
    image: null,
  },
  {
    week: 14,
    title: "Your Baby at 14 Weeks",
    description:
      "Your baby is the size of a lemon. They can squint, frown, and make a fist.",
    image: lemonImage,
  },
  {
    week: 15,
    title: "Your Baby at 15 Weeks",
    description:
      "Your baby's skin is transparent and they can sense light. They can also hear your voice!",
    image: null,
  },
  {
    week: 16,
    title: "Your Baby at 16 Weeks",
    description:
      "Your baby is the size of an avocado. They can make facial expressions like smiling.",
    image: avocadoImage,
  },
  {
    week: 17,
    title: "Your Baby at 17 Weeks",
    description:
      "Your baby's skeleton is changing from soft cartilage to bone. They can start sucking their thumb.",
    image: thumbImage,
  },
  {
    week: 18,
    title: "Your Baby at 18 Weeks",
    description:
      "Your baby is the size of a bell pepper. They can yawn, hiccup, and even suck their thumb.",
    image: bellPepperImage,
  },
  {
    week: 19,
    title: "Your Baby at 19 Weeks",
    description:
      "Your baby can hear your voice, heartbeat, and other sounds. They may also start to feel you move.",
    image: null,
  },
  {
    week: 20,
    title: "Your Baby at 20 Weeks",
    description:
      "Your baby is the size of a banana. They can swallow amniotic fluid and their taste buds are forming.",
    image: bananaImage,
  },
  {
    week: 21,
    title: "Your Baby at 21 Weeks",
    description:
      "Your baby's movements are more coordinated. They can taste the food you eat via the amniotic fluid.",
    image: null,
  },
  {
    week: 22,
    title: "Your Baby at 22 Weeks",
    description:
      "Your baby is the size of a coconut. They can perceive light and dark, and may even follow a light source.",
    image: coconutImage,
  },
  {
    week: 23,
    title: "Your Baby at 23 Weeks",
    description:
      "Your baby's sense of movement is more developed. They may respond to loud noises with a kick.",
    image: null,
  },
  {
    week: 24,
    title: "Your Baby at 24 Weeks",
    description:
      "Your baby is the size of an ear of corn. Their lungs are developing and they are practicing breathing.",
    image: earOfCornImage,
  },
  {
    week: 25,
    title: "Your Baby at 25 Weeks",
    description:
      "Your baby's skin is becoming more opaque. They can hear and recognize your voice.",
    image: null,
  },
  {
    week: 26,
    title: "Your Baby at 26 Weeks",
    description:
      "Your baby is the size of a scallion. Their eyes are beginning to open and they can respond to light.",
    image: scallionImage,
  },
  {
    week: 27,
    title: "Your Baby at 27 Weeks",
    description:
      "Your baby's brain is developing rapidly. They can experience REM sleep cycles.",
    image: null,
  },
  {
    week: 28,
    title: "Your Baby at 28 Weeks",
    description:
      "Your baby is the size of an eggplant. They can blink their eyes, which now have lashes.",
    image: eggplantImage,
  },
  {
    week: 29,
    title: "Your Baby at 29 Weeks",
    description:
      "Your baby's muscles and lungs are maturing. They can kick, stretch, and respond to sounds.",
    image: null,
  },
  {
    week: 30,
    title: "Your Baby at 30 Weeks",
    description:
      "Your baby is the size of a large cabbage. They can turn their head from side to side.",
    image: largeCabbageImage,
  },
  {
    week: 31,
    title: "Your Baby at 31 Weeks",
    description:
      "Your baby's brain is developing rapidly. They can experience REM sleep cycles.",
    image: null,
  },
  {
    week: 32,
    title: "Your Baby at 32 Weeks",
    description:
      "Your baby is the size of a squash. They are running out of room to move around.",
    image: squashImage,
  },
  {
    week: 33,
    title: "Your Baby at 33 Weeks",
    description:
      "Your baby's bones are hardening. They can now turn their head from side to side.",
    image: null,
  },
  {
    week: 34,
    title: "Your Baby at 34 Weeks",
    description:
      "Your baby is the size of a cantaloupe. They can recognize your voice and may even be startled by loud noises.",
    image: null,
  },
  {
    week: 35,
    title: "Your Baby at 35 Weeks",
    description:
      "Your baby's kidneys are fully developed. They are gaining weight and preparing for birth.",
    image: null,
  },
  {
    week: 36,
    title: "Your Baby at 36 Weeks",
    description:
      "Your baby is the size of a honeydew melon. They are practicing breathing and swallowing amniotic fluid.",
    image: honeydewmelonImage,
  },
  {
    week: 37,
    title: "Your Baby at 37 Weeks",
    description:
      "Your baby's organs are ready for life outside the womb. They are considered full term.",
    image: null,
  },
  {
    week: 38,
    title: "Your Baby at 38 Weeks",
    description:
      "Your baby is the size of a leek. They are gaining about an ounce of fat per day.",
    image: null,
  },
  {
    week: 39,
    title: "Your Baby at 39 Weeks",
    description:
      "Your baby's brain is still developing. They are considered full term and ready for birth.",
    image: readyImage,
  },
  {
    week: 40,
    title: "Your Baby at 40 Weeks",
    description:
      "Your baby is the size of a small pumpkin. They are ready to be born!",
    image: smallPumpkinImage,
  },
];

export default babyDevelopmentData;
